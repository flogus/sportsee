import { useState, useEffect } from 'react';
import Title from '../title/title';
import GraphBarChart from '../graphBarChart/graphBarChart';
import WidgetPatternFactory from '../widget/widgetPatternFactory';
import GraphWidgetFactory from '../graphWidgetFactory/graphWidgetFactory';

const mock = false
// if(mock){
//   const apiUrl = "../../services/apiCallMock"
// } else {
//   const apiUrl = "../../services/apiCall"
// }
import apiCall from "../../services/apiCallMock"

import Transformer from '../../services/tranformer'
// import validator from '../../models/modelValidator'
import UserModel from '../../models/user/userModel';
import UserInfo from '../../models/user/userInfoModel';
import KeyData from '../../models/user/keyDataModel';
import Performance from '../../models/performance/performanceModel';
import Activity from '../../models/activity/activityModel';
import AverageSessions from '../../models/averageSessions/averageSessionsModel';

function Graphics(mock) {
  console.log('mock',mock)
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
  const userId = 12;
  if(!mock){
    const userId = (urlElements[urlElements.length - 1]);
  }

  // Graph data
  const [activityData, getActivitData] = useState('');
  const [sessionsAverageData, getSessionsAverageData] = useState('');
  const [radarData, getRadarData] = useState('');
  const [scoreData, getScoreData] = useState('');

  // const userUrl = `http://localhost:3000/user/${userId}`;
  // const performanceUrl = `http://localhost:3000/user/${userId}/performance`;

  useEffect(() => {
    getUserData();
    getActivityData();
    getAverageSessionsData();
    getPerformanceData();
  }, []);


  // Utilisateur data et Widgets data
  const getUserData = () => {
    const userFetchData = apiCall.getUserDataApi(userId)
    userFetchData.then(data => {
        const utilisateur = new UserInfo(data.data.userInfos)
        getFirstName(utilisateur.getFirstName())
        getLastName(utilisateur.getLastName())

        const utilisateurKeyData = new KeyData(data.data.keyData)
        getCalorieCount(utilisateurKeyData.getCalories())
        getProteinCount(utilisateurKeyData.getProteins())
        getCarbohydrateCount(utilisateurKeyData.getCarbohydrates())
        getLipidCount(utilisateurKeyData.getLipids())

        const utilisateurScore = new UserModel(data)
        const scoreData = [
            { name: 'Score', value: utilisateurScore.getTodayScore() },
        ];
        getScoreData(scoreData)
    })
  };

  // Activite quotidienne (Bars)
  const getActivityData = () => {
    const activityFetchData = apiCall.getActivityApi(userId)
    activityFetchData.then(data => {
      const activity = new Activity(data)
      const rawData = activity.getSessions()
      const newActivityData = new Transformer(rawData)
      getActivitData(newActivityData.getTransformedActivityData())
    })
  }

  // Durée moyenne des sessions (Courbe)
  const getAverageSessionsData = () => {
    const averageSessionsFetchData = apiCall.getAverageSessionsApi(userId)
    averageSessionsFetchData.then(data => {
      const averagesessions = new AverageSessions(data)
      getSessionsAverageData(averagesessions.getSessions())
    })
  }

  /**
   * getPerformanceData()
   * @description Performance data (Radar)
   */
  const getPerformanceData = () => {
    const performanceFetchData = apiCall.getPerfDataApi(userId)
    performanceFetchData.then(data => {
      const performance = new Performance(data)
      const kind = performance.getKind().kind
      const perfData = performance.getData()
      const performanceData = new Transformer(perfData);
      performanceData.setKind(kind)
      const newPerformanceData = performanceData.getTransformedPerformanceData()
      const radarData = [
        {
          subject: 'Intensité',
          value: 200,
        },
        {
          subject: 'Vitesse',
          value: 200,
        },
        {
          subject: 'Force',
          value: 200,
        },
        {
          subject: 'Energie',
          value: 400,
        },
        {
          subject: 'Cardio',
          value: 400,
        },
        {
          subject: 'History',
          value: 400,
        },
      ];
      getRadarData(newPerformanceData)
    })
  }

  return (
    <div className="flex flex-col p-10 flex-1">
      {`${mock}`}
      <Title username={`${firstName} ${lastName}`} />
      <div className="flex flex-row flex-1">
        <div className="flex flex-col flex-1">
          <div className="flex justify-center items-center mb-3 h-96">
            <GraphBarChart data={activityData} />
          </div>
          <div className="flex basis-6/12 flex-col lg:flex-row justify-between">
            <GraphWidgetFactory data={sessionsAverageData} graphtype="bar" bgcolor="bg-seesport-red" />
            <GraphWidgetFactory data={radarData} graphtype="radar" bgcolor="bg-seesport-darkgrey" />
            <GraphWidgetFactory data={scoreData} graphtype="circle" bgcolor="bg-seesport-lightgrey" />
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
