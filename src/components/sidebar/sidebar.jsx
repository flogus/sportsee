import React from 'react';
import GraphSquareIcon from '../graphSquareIcon/graphSquareIcon';


function sidebar () {
    return (
        <div className='bg-black text-white flex flex-col h-full'>
            <div className='flex-1 flex flex-col justify-center items-center'>
                <GraphSquareIcon categorie="Yoga" icon="yoga" />
                <GraphSquareIcon categorie="Natation" icon="nage" />
                <GraphSquareIcon categorie="Cyclisme" icon="cyclisme" />
                <GraphSquareIcon categorie="Musculation" icon="muscu" />
            </div>
            <div className='flex-1 flex justify-center items-center'>
                <div className='-rotate-90 text-xs'>Copyright, SportSee 2020</div>
            </div>
        </div>
    );
}

export default sidebar