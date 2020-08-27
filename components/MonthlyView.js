import React from 'react';
// import { Calendar } from 'react-native-calendars';
import { Calendar } from './react-native-calendars/src/index';

const MonthlyView = () => {
  return (
    <Calendar
      markingType={markingData.markingType}
      markedDates={markingData.markedDates}
      onDayPress={(day) => {
        console.log('selected day', day);
      }}
    />
  );
};

const vacation = { key: 'vacation', color: 'red', selectedDotColor: 'blue' };
const massage = { key: 'massage', color: 'blue', selectedDotColor: 'blue' };
const workout = { key: 'workout', color: 'green' };
const study = { key: 'study', color: 'yellow' };
const restaurant = { key: 'restaurant', color: 'purple' };
const fishing = { key: 'fishing', color: 'orange' };

const markingDataTripleType = {
  markingType: 'multi-period-multi-dot-custom',
  markedDates: {
    '2020-08-13': {
      periods: [
        { startingDay: true, endingDay: false, color: '#f0e68c', multiPeriodBarText: '开学' },
      ],
      dots: [vacation, massage, workout, study, restaurant, fishing],
      customStyles: {
        container: {
          // backgroundColor: 'green',
          borderColor: 'purple',
          borderWidth: 2,
        },
        text: {
          color: 'black',
          fontWeight: 'bold'
        }
      },
    },
    '2020-08-14': {
      periods: [
        { startingDay: false, endingDay: false, color: '#f0e68c' },
        { startingDay: false, endingDay: true, color: '#5f9ea0', multiPeriodBarText: 'xin 🎂' },
        { startingDay: false, endingDay: true, color: '#5f9ea0', multiPeriodBarText: '爱🐈节' },
        { startingDay: false, endingDay: true, color: '#ffa500', multiPeriodBarText: '水电费' },
      ],
      dots: [vacation, massage, workout, study, restaurant],
      customStyles: {
        container: {
          // backgroundColor: 'green',
          borderColor: 'blue',
          borderWidth: 2,
        },
        text: {
          color: 'black',
          fontWeight: 'bold'
        }
      }
    },
    '2020-08-15': {
      periods: [
        { startingDay: false, endingDay: false, color: '#f0e68c' },
        { startingDay: true, endingDay: false, color: '#ffa500', multiPeriodBarText: '开学典礼' },
        { color: 'transparent' },
        { color: 'transparent' },
      ],
    }
  }
}

const markingDataCustom = {
  markingType: 'custom',
  markedDates: {
    '2020-08-13': {
      customStyles: {
        container: {
          // backgroundColor: 'green',
          borderColor: 'purple',
          borderWidth: 2,
        },
        text: {
          color: 'black',
          fontWeight: 'bold'
        }
      }
    },
    '2020-08-14': {
      customStyles: {
        container: {
          // backgroundColor: 'green',
          borderColor: 'blue',
          borderWidth: 2,
        },
        text: {
          color: 'black',
          fontWeight: 'bold'
        }
      }
    },
  }
}


const markingDataMultiDot = {
  markedDates: {
    '2020-08-13': { dots: [vacation, massage, workout] },
    '2020-08-14': { dots: [massage, workout], disabled: true }
  },
  markingType: 'multi-dot'
}

const markingDataMultiPeriod = {
  markingType: 'multi-period',
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

  markedDates: {
    '2020-08-13': {
      periods: [
        { startingDay: true, endingDay: false, color: '#f0e68c', multiPeriodBarText: '开学' },
      ],
    },
    '2020-08-14': {
      periods: [
        { startingDay: false, endingDay: false, color: '#f0e68c' },
        { startingDay: false, endingDay: true, color: '#5f9ea0', multiPeriodBarText: 'xin 🎂' },
        { startingDay: false, endingDay: true, color: '#5f9ea0', multiPeriodBarText: '爱🐈节' },
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
  }
}

// const markingData = markingDataMultiPeriod;
// const markingData = markingDataCustom;
// const markingData = markingDataMultiDot;
const markingData = markingDataTripleType;

export { MonthlyView };
