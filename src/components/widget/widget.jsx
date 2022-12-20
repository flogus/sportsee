import React from 'react';

/**
 * @module widget
 * @function widget
 * @param {Objet} props props.bgcolor, props.texte, props.chiffre
 * @returns {String} html
 */
function widget(props) {
  const bgcolor = `bg-seesport-${props.bgcolor}`;
  return (
    <div className="mx-4 mr-0 ml-6">
      <div className="bg-seesport-lightgrey flex p-4 rounded-md">
        <div className={`${bgcolor} p-3 flex-initial shrink-0 justify-center items-center rounded-md flex-1`}>
          <img src={props.icon} alt={props.texte} className="w-5 min-w-min" />
        </div>
        <div className="flex flex-col pl-2 justify-content">
          <div className="text-l font-bold">{props.chiffre}</div>
          <div className="text-xs">{props.texte}</div>
        </div>
      </div>
    </div>
  );
}

export default widget;
