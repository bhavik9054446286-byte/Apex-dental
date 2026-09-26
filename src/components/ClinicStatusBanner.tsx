import { useState, useEffect } from 'react';
import { Clock } from 'lucide-react';
import { CLINIC_TIMINGS } from '../data/clinicData';

export function ClinicStatusBanner() {
  const [status, setStatus] = useState<{
    isOpen: boolean;
    todayFormatted: string;
    nextStatusText: string;
    currentDayName: string;
  }>({
    isOpen: false,
    todayFormatted: '',
    nextStatusText: '',
    currentDayName: '',
  });

  useEffect(() => {
    function calculateStatus() {
      // Calculate based on Indian Standard Time (IST: UTC+5:30)
      const now = new Date();
      // UTC time in ms + 5.5 hours
      const utcMs = now.getTime() + (now.getTimezoneOffset() * 60000);
      const istDate = new Date(utcMs + (330 * 60000));

      const dayIndex = istDate.getDay(); // 0 is Sunday
      const currentHours = istDate.getHours();
      const currentMinutes = istDate.getMinutes();
      const currentTimeInMins = currentHours * 60 + currentMinutes;

      const todaySchedule = CLINIC_TIMINGS.find((t) => t.dayIndex === dayIndex) || CLINIC_TIMINGS[0];

      // Parse open and close times
      const [openH, openM] = todaySchedule.openTime.split(':').map(Number);
      const [closeH, closeM] = todaySchedule.closeTime.split(':').map(Number);
      const openMins = openH * 60 + openM;
      const closeMins = closeH * 60 + closeM;

      const isOpen = currentTimeInMins >= openMins && currentTimeInMins < closeMins;

      let nextStatusText = '';
      if (isOpen) {
        const closeHourFormatted = closeH > 12 ? `${closeH - 12}:${closeM === 0 ? '00' : closeM} PM` : `${closeH}:${closeM} AM`;
        nextStatusText = `Open Today until ${closeHourFormatted}`;
      } else {
        if (currentTimeInMins < openMins) {
          nextStatusText = `Opens Today at 9:00 AM`;
        } else {
          // find tomorrow's schedule
          const tomorrowIndex = (dayIndex + 1) % 7;
          const tomorrowSchedule = CLINIC_TIMINGS.find((t) => t.dayIndex === tomorrowIndex);
          nextStatusText = `Closed now · Opens ${tomorrowSchedule?.day} at 9:00 AM`;
        }
      }

      setStatus({
        isOpen,
        todayFormatted: todaySchedule.formatted,
        nextStatusText,
        currentDayName: todaySchedule.day,
      });
    }

    calculateStatus();
    const interval = setInterval(calculateStatus, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center gap-2 text-xs font-medium">
      <span className="relative flex h-2 w-2">
        <span
          className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${
            status.isOpen ? 'bg-emerald-400' : 'bg-amber-400'
          }`}
        />
        <span
          className={`relative inline-flex rounded-full h-2 w-2 ${
            status.isOpen ? 'bg-emerald-500' : 'bg-amber-500'
          }`}
        />
      </span>
      <span className={status.isOpen ? 'text-emerald-700 font-semibold' : 'text-slate-600'}>
        {status.nextStatusText || 'Mon-Sat 9am-8:30pm · Sun 9am-1pm'}
      </span>
      <span className="hidden sm:inline text-slate-400">·</span>
      <span className="hidden sm:inline-flex items-center gap-1 text-slate-500">
        <Clock className="w-3.5 h-3.5 text-slate-400" />
        {status.currentDayName}: {status.todayFormatted}
      </span>
    </div>
  );
}
