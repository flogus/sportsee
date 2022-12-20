import React from 'react';

/**
 * @method graphSquareIcon
 * @param {Object} props props.categorie, props.icon
 * @returns {String} a link with the icon
 */
function graphSquareIcon(props) {
  const link = `#${props.categorie}`;
  const title = `Catégorie ${props.categorie}`;

  return (
    <a href={link} title={title} className="p-0 radius-5">
      <img src={require(`../../assets/icon-${props.icon}.png`)} alt={props.categorie} />
    </a>
  );
}

export default graphSquareIcon;
