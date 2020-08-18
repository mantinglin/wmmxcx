import React, { useState } from 'react';
import { SafeAreaView } from 'react-native';
import { Button, Layout, Text } from '@ui-kitten/components';
import SubviewSwitchBar from './SubviewSwitchBar';
import MonthlyCalenderView from './MonthlyCalenderView/MonthlyCalenderView';
import WeeklyCalenderView from './WeeklyCalenderView/WeeklyCalenderView';
import DailyCalenderView from './DailyCalenderView/DailyCalenderView';

export default function CalenderScreen() {
  const [subviewIdx, setSubviewIdx] = useState(2);
  const subviews = [<MonthlyCalenderView/ >, <WeeklyCalenderView/ >, <DailyCalenderView/ >];
  return (
    <SafeAreaView>
      <Layout style={{ height: "100%" }}>
        <SubviewSwitchBar subviewIdx={subviewIdx} setSubviewIdx={setSubviewIdx} />
        {subviews[subviewIdx]}
      </Layout>
    </SafeAreaView>
  );
}
