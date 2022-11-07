import React from 'react';
import Title from '../title/title'
import GraphBarChart from '../graphBarChart/graphBarChart'
import GraphWidget from '../graphWidget/graphWidget'
import GraphSquareWidget from '../graphSquareWidget/graphSquareWidget'

function graphics () {
    return (
        <div className='flex flex-col p-10 border-2 flex-1'>
            <Title />
            <div className='flex flex-row border-2 flex-1'>
                <div className='flex flex-col border-2 flex-1'>
                    <div className='flex basis-6/12 justify-center items-center p-10'>
                       <GraphBarChart />
                    </div>
                    <div className='flex basis-6/12 flex-row justify-between border-2'>
                        <GraphSquareWidget graphtype="bar" bgcolor="bg-seesport-red" />
                        <GraphSquareWidget graphtype="radar" bgcolor="bg-seesport-darkgrey" />
                        <GraphSquareWidget graphtype="circle" bgcolor="bg-seesport-lightgrey" />
                    </div>
                </div>
                <div className='border-2 flex flex-col justify-between'>
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