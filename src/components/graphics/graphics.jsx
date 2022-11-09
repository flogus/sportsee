import React, {useState, useEffect, useLocation} from 'react';
import Title from '../title/title'
import GraphBarChart from '../graphBarChart/graphBarChart'
import WidgetPatternFactory from '../widget/widgetPatternFactory'
import GraphWidgetFactory from '../graphWidgetFactory/graphWidgetFactory'
import axios from 'axios'

function Graphics() {
    // User basis data
    const [firstName, getFirstName] = useState('')
    const [lastName, getLastName] = useState('')

    // Widget data
    const [calorieCount, getCalorieCount] = useState('')
    const [proteinCount, getProteinCount] = useState('')
    const [carbohydrateCount, getCarbohydrateCount] = useState('')
    const [lipidCount, getLipidCount] = useState('')
    
    // Url - Param
    let urlElements = window.location.href.split('/')
    let userId = (urlElements[urlElements.length-1])
    
    // Graph data
    const [radarData, getRadarData] = useState('')

    // console.log('userId',userId); 
    // if(userId !== 12 || userId !== 18){
    //     console.log('wrong id, reset userid')
    //     userId = 12
    // }

    const userUrl = 'http://localhost:3000/user/'+userId
    const performanceUrl = 'http://localhost:3000/user/'+userId+'/performance'

    useEffect(() => {
        getUserData();
        getPerformanceData();
    }, []);

    const getPerformanceData = () => {
        axios.get(performanceUrl)
        .then((response) => {
            const perfName = response.data.data.kind
            const perfValue = response.data.data.data
            console.log('response performance',perfName)
            console.log('response performance',perfValue)
            getRadarData(perfName)
        })
        .catch(error => console.error(`error: ${error}`))
    }

    const getUserData = () => {
        axios.get(userUrl)
        .then((response) => {
            const firstName = response.data.data.userInfos.firstName
            const lastName = response.data.data.userInfos.lastName
            const calorieCount = response.data.data.keyData.calorieCount
            const proteinCount = response.data.data.keyData.proteinCount
            const carbohydrateCount = response.data.data.keyData.carbohydrateCount
            const lipidCount = response.data.data.keyData.lipidCount
            getFirstName(firstName)
            getLastName(lastName)
            getCalorieCount(calorieCount)
            getProteinCount(proteinCount)
            getCarbohydrateCount(carbohydrateCount)
            getLipidCount(lipidCount)
        })
        .catch(error => console.error(`error: ${error}`))
    }

    const theradardata = [
        {
          "subject": 'Intensité',
          "value":120,
        },
        {
          "subject": 'Vitesse',
          "value":40,
        },
        {
          "subject": 'Force',
          "value":280,
        },
        {
          "subject": 'Energie',
          "value":20,
        },
        {
          "subject": 'Cardio',
          "value":220,
        },
        {
          "subject": 'History',
          "value":210,
        }
      ]
    return (
        <div className='flex flex-col p-10 flex-1'>
            <Title username={firstName+' '+lastName}/>
            <div className='flex flex-row flex-1'>
                <div className='flex flex-col flex-1'>
                    <div className='flex justify-center items-center mb-3 h-96'>
                       <GraphBarChart />
                    </div>
                    <div className='flex basis-6/12 flex-col lg:flex-row justify-between'>
                        <GraphWidgetFactory graphtype="bar" bgcolor="bg-seesport-red" />
                        <GraphWidgetFactory data={theradardata} graphtype="radar" bgcolor="bg-seesport-darkgrey" />
                        <GraphWidgetFactory graphtype="circle" bgcolor="bg-seesport-lightgrey" />
                    </div>
                </div>
                <div className='flex flex-col justify-between'>
                    <WidgetPatternFactory widgettype="calories" chiffre={calorieCount} texte="Calories"/>
                    <WidgetPatternFactory widgettype="proteines" chiffre={proteinCount} texte="Proteines" />
                    <WidgetPatternFactory widgettype="glucides" chiffre={carbohydrateCount} texte="Glucides" />
                    <WidgetPatternFactory widgettype="lipides" chiffre={lipidCount} texte="Lipides" />
                </div>
            </div>
        </div>
    );
}

export default Graphics