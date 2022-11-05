import React from 'react';

function graphSquareIcon(props) {
    const link = '#'+props.categorie;
    const title = 'Catégorie '+props.categorie;

    return (
        <a href={link} title={title} className='bg-whit p-8 radius-5'>
            <img src={require(`../../assets/icon-${props.icon}.png`)} alt={props.categorie} />
            <div className='text-l font-bold'>{props.categorie}</div>
        </a>
    );
}

export default graphSquareIcon