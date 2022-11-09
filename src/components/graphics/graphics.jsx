import React from 'react';
import Title from '../title/title'
import GraphBarChart from '../graphBarChart/graphBarChart'
import WidgetPatternFactory from '../widget/widgetPatternFactory'
import GraphWidgetFactory from '../graphWidgetFactory/graphWidgetFactory'



function graphics () {
    return (
        <div className='flex flex-col p-10 flex-1'>
            <Title username='florian' />
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
                    <WidgetPatternFactory widgettype="calories" chiffre="1930" texte="Calories"/>
                    <WidgetPatternFactory widgettype="proteines" chiffre="155" texte="Proteines" />
                    <WidgetPatternFactory widgettype="glucides" chiffre="290" texte="Glucides" />
                    <WidgetPatternFactory widgettype="lipides" chiffre="50" texte="Lipides" />
                </div>
            </div>
        </div>
    );
}

export default graphics