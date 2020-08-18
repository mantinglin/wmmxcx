import React from 'react';
import { List } from '@ui-kitten/components';
import DaySchedule from './DaySchedule';
import { eventsData } from '../../../staticData';

export default function DailyCalenderView() {
  return (
    <List
      style={{ padding: 20, backgroundColor: "white" }}
      data={eventsData}
      renderItem={DaySchedule}
    />
  );
}
