import React from 'react';
import Title from '../title/title'
import GraphLineChart from '../graphLineChart/graphLineChart'
import GraphWidget from '../graphWidget/graphWidget'

function graphics () {
    return (
        <div className='flex flex-col p-10 border-2 flex-1'>
            <Title />
            <div className='flex flex-row border-2 flex-1'>
                <div className='flex flex-col border-2 flex-1'>
                    <div className='flex flex-1 justify-center items-center p-10'>
                       <GraphLineChart />
                    </div>
                    <div className='flex flex-row border-2 flex-1'>
                        <div className='flex-1'>square 1</div>
                        <div className='flex-1'>square 2</div>
                        <div className='flex-1'>square 3</div>
                    </div>
                </div>
                <div className='border-2'>
                    <GraphWidget chiffre="1930" texte="Calories"/>
                    <GraphWidget chiffre="155" texte="Proteines" />
                    <GraphWidget chiffre="290" texte="Glucides" />
                    <GraphWidget chiffre="50" texte="Lipides" />
                </div>
            </div>
        </div>
    );
}

export default graphics