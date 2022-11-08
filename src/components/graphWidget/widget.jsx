import React from 'react';

function widget(props){
    const bgcolor = "bg-seesport-"+props.bgcolor
    return (
        <div className='mx-4 mr-0 ml-6'>
            <div className='bg-seesport-lightgrey flex p-8 rounded-md'>
                <div className={bgcolor+" p-3 flex justify-center items-center "}>
                    <img src={props.icon} alt={props.texte} className="w-5" />
                </div>
                <div className='flex flex-col pl-2 justify-content'>
                    <div className='text-l font-bold'>{props.chiffre}</div>
                    <div className='text-xs'>{props.texte}</div>
                </div>
            </div>
        </div>
    );
}

export default widget