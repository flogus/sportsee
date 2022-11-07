import React from 'react';
import { ReactComponent as IconCalorie } from '.././../assets/icon-widget-calorie.svg'
import { ReactComponent as IconGlucide } from '.././../assets/icon-widget-glucide.svg'
import { ReactComponent as IconLipide } from '.././../assets/icon-widget-lipide.svg'
import { ReactComponent as IconProteine } from '.././../assets/icon-widget-proteine.svg'

function graphWidget(props) {
    return (
        <div className='mx-4 my-2'>
            <div className='bg-slate-100 flex p-4'>
                <div className='bg-red-200 pl-5 py-2 flex justify-center items-center'>
                    <IconCalorie />
                </div>
                <div className='flex flex-col px-8'>
                    <div className='text-l font-bold'>{props.chiffre}</div>
                    <div className='text-xs'>{props.texte}</div>
                </div>
            </div>
        </div>
    );
}

export default graphWidget