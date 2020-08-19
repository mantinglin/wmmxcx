/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native';
import { NavigationContainer, } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, Button, Layout, List, Text } from '@ui-kitten/components';

function WeScreen() {
  return (
    <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>我们</Text>
    </Layout>
  );
}

function ChoresScreen() {
  return (
    <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>家务</Text>
    </Layout>
  );
}

function CalenderScreen() {
  const [subviewIdx, setSubviewIdx] = useState(2);
  const subviews = [<MonthlyCalenderView/ >, <WeeklyCalenderView/ >, <DailyCalenderView/ >];
  return (
    <SafeAreaView>
          <Layout level="4" style={{backgroundColor:"black"}}>

      <Layout style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: "#ECECEC", height: 45 }}>
        <Button style={{ backgroundColor: subviewIdx === 0 ? "#D8D8D8" : "#ECECEC", borderRadius: 100 }} appearance='ghost' status='basic' size='small' onPress={() => setSubviewIdx(0)}>
          <Text appearance={ subviewIdx === 0 ? "default" : "hint" }>每月</Text>
        </Button>
        <Button style={{ backgroundColor: subviewIdx === 1 ? "#D8D8D8" : "#ECECEC", borderRadius: 100 }} appearance='ghost' status='basic' size='small' onPress={() => setSubviewIdx(1)}>
          <Text appearance={ subviewIdx === 1 ? "default" : "hint" }>每周</Text>
        </Button>
        <Button style={{ backgroundColor: subviewIdx === 2 ? "#D8D8D8" : "#ECECEC", borderRadius: 100 }} appearance='ghost' status='basic' size='small' onPress={() => setSubviewIdx(2)}>
          <Text appearance={ subviewIdx === 2 ? "default" : "hint" }>每日</Text>
        </Button>
        </Layout>
      {subviews[subviewIdx]}
      </Layout>
    </SafeAreaView>
  );
}

function MonthlyCalenderView() {
  return (
    <Layout style={{ height: "100%", alignItems: 'center' }}>
      <Text style={{ marginTop: 10 }}>日历月视图</Text>
    </Layout>
  );
}

function WeeklyCalenderView() {
  return (
    <Layout style={{ height: "100%", alignItems: 'center' }}>
      <Text style={{ marginTop: 10 }}>日历周视图</Text>
    </Layout>
  );
}

function DailyCalenderView() {
  let eventsData =[
    {
      date: "7月27日",
      events:
        [
          { name: "试镜", time: "18点 - 20点", location: "Stewart Center #320", memo: "Lorem ipsum dolor sit amet", organizer: "1" }
        ]
    },
    {
      date: "7月30日",
      events:
        [
          { name: "约饭", time: "17点 - 19点", location: "家里", memo: "吃火锅" },
          { name: "Watch Mulan on Disney+", time: "20点 - 22点", location: "家里", memo: "Lorem ipsum dolor sit amet", organizer: "2" }
        ]
    },
    {
      date: "8月1日",
      events:
        [
          { name: "Watch Hamilton on Disney+", time: "18点 - 20点", location: "家里", memo: "Lorem ipsum dolor sit amet", organizer: "1" },
          { name: "Rewatch Mulan on Disney+", time: "20点 - 22点", location: "家里", memo: "Lorem ipsum dolor sit amet", organizer: "2" }
        ]
    }
  ];
  const eventsOnDate = (eventsOnDate) => {
    const eventCard = (eventDetail) => {
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
    return (
      <Layout>
        <Text category="h5" style={{ marginBottom: 20 }}>
          {eventsOnDate.item.date}
        </Text>
        <List
          style={{ marginBottom: 20, backgroundColor: "white" }}
          data={eventsOnDate.item.events}
          renderItem={eventCard}
        />
      </Layout>
    );
  }
  return (
    <List
      style={{ height: "100%", padding: 20, marginBottom: -90, backgroundColor: "white" }}
      data={eventsData}
      renderItem={eventsOnDate}
    />
  );
}

function MyHomeScreen() {
  return (
    <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>我的家</Text>
    </Layout>
  );
}

const Tab = createBottomTabNavigator();

const App: () => React$Node = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconNameMapping = {
              "我们": ["people-circle", "people-circle-outline"],
              "家务": ["clipboard", "clipboard-outline"],
              "日历": ["calendar", "calendar-outline"],
              "我的家": ["home", "home-outline"]
            }
            let iconName = focused ? iconNameMapping[route.name][0] : iconNameMapping[route.name][1];
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name="我们" component={WeScreen} />
        <Tab.Screen name="家务" component={ChoresScreen} />
        <Tab.Screen name="日历" component={CalenderScreen} />
        <Tab.Screen name="我的家" component={MyHomeScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default () => (
  <ApplicationProvider {...eva} theme={eva.light}>
    <App />
  </ApplicationProvider>
);
