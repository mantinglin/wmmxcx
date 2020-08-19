import React from 'react';
import { Layout, List, Text } from '@ui-kitten/components';
import EventCard from './EventCard';

export default function DaySchedule(eventsOnDate) {
  return (
    <Layout>
      <Text category="h5" style={{ marginBottom: 20 }}>
        {eventsOnDate.item.date}
      </Text>
      <List
        style={{ marginBottom: 20, backgroundColor: "white" }}
        data={eventsOnDate.item.events}
        renderItem={EventCard}
      />
    </Layout>
  );
}
