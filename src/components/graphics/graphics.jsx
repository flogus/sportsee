import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Title from '../title/title';
import GraphBarChart from '../graphBarChart/graphBarChart';
import WidgetPatternFactory from '../widget/widgetPatternFactory';
import GraphWidgetFactory from '../graphWidgetFactory/graphWidgetFactory';
import User from '../../models/user/userModel';
import Performance from '../../models/performance/performanceModel';
import Activity from '../../models/activity/activityModel';
import AverageSessions from '../../models/averageSessions/averageSessionsModel';

function Graphics() {
  // User basis data
  const [firstName, getFirstName] = useState('');
  const [lastName, getLastName] = useState('');

  // Widget data
  const [calorieCount, getCalorieCount] = useState('');
  const [proteinCount, getProteinCount] = useState('');
  const [carbohydrateCount, getCarbohydrateCount] = useState('');
  const [lipidCount, getLipidCount] = useState('');

  // Url - Param
  const urlElements = window.location.href.split('/');
  const userId = (urlElements[urlElements.length - 1]);

  // Graph data
  const [radarData, getRadarData] = useState('');
  const [perfName, getPerfName] = useState('');
  const [perfValue, getPerfValue] = useState('');

  const userUrl = `http://localhost:3000/user/${userId}`;
  const performanceUrl = `http://localhost:3000/user/${userId}/performance`;

  useEffect(() => {
    getUserData();
    getPerformanceData();
  }, []);

  const getPerformanceData = () => {
    axios.get(performanceUrl)
      .then((response) => {
        const perfName = response.data.data.kind;
        const perfValue = response.data.data.data;
        getPerfName(perfName);
        getPerfValue(perfValue);
        buildRadarData(perfName, perfValue);
      })
      .catch((error) => console.error(`error: ${error}`));
  };

  const buildRadarData = (perfName, perfValue) => {
    // console.log('>>> buildRadarData',perfName, perfValue)
    const thenewradardata = [];

    perfValue.forEach((element) => {
      // console.log('element',element);
      thenewradardata.push(addObject(element));
    });
    function addObject(params) {
      const template = {
        subject: params,
        value: 120,
      };
      return template;
    }
    // console.log('the new radar data :',thenewradardata)
  };
  const getUserData = () => {
    axios.get(userUrl)
      .then((response) => {
        const { firstName } = response.data.data.userInfos;
        const { lastName } = response.data.data.userInfos;
        const { calorieCount } = response.data.data.keyData;
        const { proteinCount } = response.data.data.keyData;
        const { carbohydrateCount } = response.data.data.keyData;
        const { lipidCount } = response.data.data.keyData;
        getFirstName(firstName);
        getLastName(lastName);
        getCalorieCount(calorieCount);
        getProteinCount(proteinCount);
        getCarbohydrateCount(carbohydrateCount);
        getLipidCount(lipidCount);
      })
      .catch((error) => console.error(`error: ${error}`));
  };

  const theradardata = [
    {
      subject: 'Intensité',
      value: 120,
    },
    {
      subject: 'Vitesse',
      value: 40,
    },
    {
      subject: 'Force',
      value: 280,
    },
    {
      subject: 'Energie',
      value: 20,
    },
    {
      subject: 'Cardio',
      value: 220,
    },
    {
      subject: 'History',
      value: 210,
    },
  ];

  // User
  const testUserData = {
    data: {
      id: 999,
      userInfos: {
        firstName: 'Kilian',
        lastName: 'Mbappe',
        age: 23,
      },
      todayScore: 0.9,
      keyData: {
        calorieCount: 1930,
        proteinCount: 155,
        carbohydrateCount: 290,
        lipidCount: 50,
      },
    },
  };
  const testUser = new User(testUserData);
  console.groupCollapsed('>>> User');
  console.log('User :', testUser);
  console.log('getTodayScore :', testUser.getTodayScore());
  console.log('getId :', testUser.getId());
  console.log('getCompleteName :', testUser.getUserInfos().getCompleteName());
  console.log('getAge :', testUser.getUserInfos().getAge());
  console.log('getCalories :', testUser.getKeyData().getCalories());
  console.log('getProteins :', testUser.getKeyData().getProteins());
  console.log('getCarbohydrates :', testUser.getKeyData().getCarbohydrates());
  console.log('getLipids :', testUser.getKeyData().getLipids());
  console.groupEnd();

  // Performance
  const testPerfData = {
    data: {
      userId: 12,
      kind: {
        1: 'cardio',
        2: 'energy',
        3: 'endurance',
        4: 'strength',
        5: 'speed',
        6: 'intensity',
      },
      data: [
        {
          value: 80,
          kind: 1,
        },
        {
          value: 120,
          kind: 2,
        },
        {
          value: 140,
          kind: 3,
        },
        {
          value: 50,
          kind: 4,
        },
        {
          value: 200,
          kind: 5,
        },
        {
          value: 90,
          kind: 6,
        },
      ],
    },
  };
  const testPerf = new Performance(testPerfData);
  console.groupCollapsed('>>> Performance');
  console.log('userId :', testPerf.getUserId());
  console.log('kind :', testPerf.getKind());
  console.log('kind list :', testPerf.getKind().getKind());
  console.log('data :', testPerf.getData());
  console.groupEnd();

  // Activity
  const testActivityData = {
    data: {
      userId: 12,
      sessions: [
        {
          day: '2020-07-01',
          kilogram: 80,
          calories: 240,
        },
        {
          day: '2020-07-02',
          kilogram: 80,
          calories: 220,
        },
        {
          day: '2020-07-03',
          kilogram: 81,
          calories: 280,
        },
        {
          day: '2020-07-04',
          kilogram: 81,
          calories: 290,
        },
        {
          day: '2020-07-05',
          kilogram: 80,
          calories: 160,
        },
        {
          day: '2020-07-06',
          kilogram: 78,
          calories: 162,
        },
        {
          day: '2020-07-07',
          kilogram: 76,
          calories: 390,
        },
      ],
    },
  };
  const testActivity = new Activity(testActivityData);
  console.groupCollapsed('>>> Activity');
  console.log('userId :', testActivity.getUserId());
  console.log('sessions :', testActivity.getSessions());
  console.log('day :', testActivity.getSessions()[0].day);
  console.log('kilogram :', testActivity.getSessions()[0].kilogram);
  console.log('calories :', testActivity.getSessions()[0].calories);
  console.groupEnd();

  // Average Session
  const testAverageSessionData = {
    data: {
      userId: 12,
      sessions: [
        {
          day: 1,
          sessionLength: 30,
        },
        {
          day: 2,
          sessionLength: 23,
        },
        {
          day: 3,
          sessionLength: 45,
        },
        {
          day: 4,
          sessionLength: 50,
        },
        {
          day: 5,
          sessionLength: 0,
        },
        {
          day: 6,
          sessionLength: 0,
        },
        {
          day: 7,
          sessionLength: 60,
        },
      ],
    },
  };
  const testAverageSession = new AverageSessions(testAverageSessionData);
  console.groupCollapsed('>>> Average Session');
  console.log('userId :', testAverageSession.getUserId());
  console.log('sessions :', testAverageSession.getSessions());
  console.log('day :', testAverageSession.getSessions()[0].day);
  console.log('sessionLength :', testAverageSession.getSessions()[0].sessionLength);
  console.groupEnd();

  return (
    <div className="flex flex-col p-10 flex-1">
      <Title username={`${firstName} ${lastName}`} />
      <div className="flex flex-row flex-1">
        <div className="flex flex-col flex-1">
          <div className="flex justify-center items-center mb-3 h-96">
            <GraphBarChart />
          </div>
          <div className="flex basis-6/12 flex-col lg:flex-row justify-between">
            <GraphWidgetFactory graphtype="bar" bgcolor="bg-seesport-red" />
            <GraphWidgetFactory data={theradardata} graphtype="radar" bgcolor="bg-seesport-darkgrey" />
            <GraphWidgetFactory graphtype="circle" bgcolor="bg-seesport-lightgrey" />
          </div>
        </div>
        <div className="flex flex-col justify-between">
          <WidgetPatternFactory widgettype="calories" chiffre={calorieCount} texte="Calories" />
          <WidgetPatternFactory widgettype="proteines" chiffre={proteinCount} texte="Proteines" />
          <WidgetPatternFactory widgettype="glucides" chiffre={carbohydrateCount} texte="Glucides" />
          <WidgetPatternFactory widgettype="lipides" chiffre={lipidCount} texte="Lipides" />
        </div>
      </div>
    </div>
  );
}

export default Graphics;
