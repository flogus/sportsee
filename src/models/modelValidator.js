import User from '../models/user/userModel'
import Performance from '../models/performance/performanceModel';
import Activity from '../models/activity/activityModel';
import AverageSessions from '../models/averageSessions/averageSessionsModel';

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
//   console.groupCollapsed('>>> User');
//   console.log('User :', testUser);
//   console.log('getTodayScore :', testUser.getTodayScore());
//   console.log('getId :', testUser.getId());
//   console.log('getCompleteName :', testUser.getUserInfos().getCompleteName());
//   console.log('getAge :', testUser.getUserInfos().getAge());
//   console.log('getCalories :', testUser.getKeyData().getCalories());
//   console.log('getProteins :', testUser.getKeyData().getProteins());
//   console.log('getCarbohydrates :', testUser.getKeyData().getCarbohydrates());
//   console.log('getLipids :', testUser.getKeyData().getLipids());
//   console.groupEnd();

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
//   console.groupCollapsed('>>> Performance');
//   console.log('userId :', testPerf.getUserId());
//   console.log('kind :', testPerf.getKind());
//   console.log('kind list :', testPerf.getKind().getKind());
//   console.log('data :', testPerf.getData());
//   console.groupEnd();

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
//   console.groupCollapsed('>>> Activity');
//   console.log('userId :', testActivity.getUserId());
//   console.log('sessions :', testActivity.getSessions());
//   console.log('day :', testActivity.getSessions()[0].day);
//   console.log('kilogram :', testActivity.getSessions()[0].kilogram);
//   console.log('calories :', testActivity.getSessions()[0].calories);
//   console.groupEnd();

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
//   console.groupCollapsed('>>> Average Session');
//   console.log('userId :', testAverageSession.getUserId());
//   console.log('sessions :', testAverageSession.getSessions());
//   console.log('day :', testAverageSession.getSessions()[0].day);
//   console.log('sessionLength :', testAverageSession.getSessions()[0].sessionLength);
//   console.groupEnd();