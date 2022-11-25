import React from 'react';
import GraphSquareIcon from '../graphSquareIcon/graphSquareIcon';

function sidebar() {
  return (
    <div className="bg-black text-white flex flex-col py-3">
      <div className="basis-8/12 flex flex-col justify-around pt-6 items-center">
        <GraphSquareIcon categorie="Yoga" icon="yoga" />
        <GraphSquareIcon categorie="Natation" icon="nage" />
        <GraphSquareIcon categorie="Cyclisme" icon="cyclisme" />
        <GraphSquareIcon categorie="Musculation" icon="muscu" />
      </div>
      <div className="basis-4/12 flex justify-center items-center">
        <div className="-rotate-90 text-xs whitespace-nowrap">Copyright, SportSee 2020</div>
      </div>
    </div>
  );
}

export default sidebar;
