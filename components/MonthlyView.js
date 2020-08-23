import React from 'react';
// import { Calendar } from 'react-native-calendars';
import { Calendar } from './react-native-calendars/src/index';

const MonthlyView = () => {
  return (
    <Calendar
      // markedDates={{
      //   '2020-08-13': {
      //     periods: [
      //       { color: 'transparent' },
      //       { color: 'transparent' },
      //       { color: 'transparent' },
      //       { startingDay: true, endingDay: false, color: '#f0e68c', multiPeriodBarText: '开学' },
      //     ],
      //   },
      //   '2020-08-14': {
      //     periods: [
      //       { startingDay: false, endingDay: true, color: '#5f9ea0', multiPeriodBarText: '交房租' },
      //       { startingDay: false, endingDay: true, color: '#5f9ea0', multiPeriodBarText: '和她吃饭' },
      //       { startingDay: false, endingDay: true, color: '#ffa500', multiPeriodBarText: '水电费' },
      //       { startingDay: false, endingDay: false, color: '#f0e68c' },
      //     ],
      //   },
      //   '2020-08-15': {
      //     periods: [
      //       { startingDay: true, endingDay: false, color: '#ffa500', multiPeriodBarText: '开学典礼' },
      //       { color: 'transparent' },
      //       { color: 'transparent' },
      //       { startingDay: false, endingDay: false, color: '#f0e68c' },
      //     ],
      //   },
      //   '2020-08-16': {
      //     periods: [
      //       { startingDay: false, endingDay: false, color: '#ffa500', multiPeriodBarText: '开学典礼' },
      //       { color: 'transparent' },
      //       { color: 'transparent' },
      //       { startingDay: false, endingDay: false, color: '#f0e68c' },
      //     ],
      //   },
      //   '2020-08-17': {
      //     periods: [
      //       { startingDay: false, endingDay: false, color: '#ffa500' },
      //       { color: 'transparent' },
      //       { color: 'transparent' },
      //       { startingDay: false, endingDay: false, color: '#f0e68c' },
      //     ],
      //   },
      // }}
      // // Date marking style [simple/period/multi-dot/custom]. Default = 'simple'
      // markingType='multi-period'
      // onDayPress={(day) => {
      //   console.log('selected day', day);
      // }}
      markedDates={{
        '2020-08-13': {
          periods: [
            { startingDay: true, endingDay: false, color: '#f0e68c', multiPeriodBarText: '开学' },
          ],
        },
        '2020-08-14': {
          periods: [
            { startingDay: false, endingDay: false, color: '#f0e68c' },
            { startingDay: false, endingDay: true, color: '#5f9ea0', multiPeriodBarText: 'xin 🎂' },
            { startingDay: false, endingDay: true, color: '#5f9ea0', multiPeriodBarText: '爱猫节' },
            { startingDay: false, endingDay: true, color: '#ffa500', multiPeriodBarText: '水电费' },
          ],
        },
        '2020-08-15': {
          periods: [
            { startingDay: false, endingDay: false, color: '#f0e68c' },
            { startingDay: true, endingDay: false, color: '#ffa500', multiPeriodBarText: '开学典礼' },
            { color: 'transparent' },
            { color: 'transparent' },
          ],
        },
        '2020-08-16': {
          periods: [
            { startingDay: false, endingDay: false, color: '#f0e68c' },
            { startingDay: false, endingDay: false, color: '#ffa500', multiPeriodBarText: '开学典礼' },
            { color: 'transparent' },
            { color: 'transparent' },
          ],
        },
        '2020-08-17': {
          periods: [
            { startingDay: false, endingDay: false, color: '#f0e68c' },
            { startingDay: false, endingDay: false, color: '#ffa500' },
            { color: 'transparent' },
            { color: 'transparent' },
          ],
        },
      }}
      // Date marking style [simple/period/multi-dot/custom]. Default = 'simple'
      markingType='multi-period'
      onDayPress={(day) => {
        console.log('selected day', day);
      }}
    />
  );
};

export { MonthlyView };
