'use client';

import React, { useState } from 'react';
import { DateTimePicker } from '@/components/ui/datetime-picker';

export const DatePicker = () => {
  const [date, setDate] = useState<Date | undefined>(undefined);
console.log("date >> ", date);
  return (
    <div className="flex flex-col gap-3 md:flex-row md:gap-10">
      <div className="w-72 space-y-2">
        <p>Date Picker</p>
        <DateTimePicker granularity="day" value={date} onChange={(newDate) => setDate(newDate)} />
      </div>
    </div>
  );
};
