import React from 'react';
import { Layout, Text } from '@ui-kitten/components';

export default function EventCard(eventDetail) {
  const uuid = "1";
  return (
    <Layout
      style={{
        height: 150, justifyContent: "space-evenly", paddingLeft: 20, 
        backgroundColor: eventDetail.item.organizer === uuid ? "#F5A624" : "#4990E2",
        marginBottom: 10
      }}
    >
      <Text appearance="alternative" category="s1">{eventDetail.item.name}</Text>
      <Text appearance="alternative">{eventDetail.item.time}</Text>
      <Text appearance="alternative">{eventDetail.item.location}</Text>
      <Text appearance="alternative">{eventDetail.item.memo}</Text>
    </Layout>
  );
}
