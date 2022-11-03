import React from 'react';
import iconmuscu from '../../assets/icon-muscu.png'
import iconnage from '../../assets/icon-nage.png'
import iconvelo from '../../assets/icon-velo.png'
import iconyoga from '../../assets/icon-yoga.png'

function sidebar () {
    return (
        <div className='bg-black text-white flex flex-col h-full'>
            <div className='flex-1 flex flex-col justify-center items-center'>
                <img src={iconmuscu} alt='Musculation' className='py-2' />
                <img src={iconnage} alt='Nage' className='py-2' />
                <img src={iconvelo} alt='Vélo' className='py-2' />
                <img src={iconyoga} alt='Yoga' className='py-2' />
            </div>
            <div className='flex-1 flex justify-center items-center'>
                <div className='-rotate-90 text-xs'>Copyright, SportSee 2020</div>
            </div>
        </div>
    );
}

export default sidebar