import React from 'react';

const capitalizeFirst = str => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

function title (props) {
    return (
        <div className='flex flex-col'>
            <h1 className='font-bold pb-5'>Bonjour <span className='text-red-600'>{capitalizeFirst(props.username)}</span></h1>
            <div>Félicitation ! Vous avez explosé vos objectifs hier 👏</div>
        </div>
    );
}

export default title