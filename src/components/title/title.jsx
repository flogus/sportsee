import React from 'react';

const capitalizeFirst = (str) => str.charAt(0).toUpperCase() + str.slice(1);

/**
 * title
 * @function title
 * @param {Object} props props.username
 * @returns {String} the title with the name of the user
 */
function title(props) {
  return (
    <div className="flex flex-col">
      <h1 className="font-bold pb-5">
        Bonjour
        {' '}
        <span className="text-red-600">{capitalizeFirst(props.username)}</span>
      </h1>
      <div>Félicitation ! Vous avez explosé vos objectifs hier 👏</div>
    </div>
  );
}

export default title;
