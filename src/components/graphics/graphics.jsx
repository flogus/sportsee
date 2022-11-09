import React, {useState, useEffect} from 'react';
import Title from '../title/title'
import GraphBarChart from '../graphBarChart/graphBarChart'
import WidgetPatternFactory from '../widget/widgetPatternFactory'
import GraphWidgetFactory from '../graphWidgetFactory/graphWidgetFactory'
import axios from 'axios'


function Graphics(props) {
    const [firstName, getFirstName] = useState('')
    const [lastName, getLastName] = useState('')
    const [calorieCount, getCalorieCount] = useState('')
    const [proteinCount, getProteinCount] = useState('')
    const [carbohydrateCount, getCarbohydrateCount] = useState('')
    const [lipidCount, getLipidCount] = useState('')
    const url = 'http://localhost:3000/user/18'

    useEffect(() => {
        getUserData();
    }, []);

    const getUserData = () => {
        axios.get(url)
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
                        <GraphWidgetFactory graphtype="radar" bgcolor="bg-seesport-darkgrey" />
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