import React from 'react';
import logo from '../../assets/logo-sportsee.png';

/**
 * navigation bar
 * @function nav
 * @returns {String} navbar
 */
function nav() {
  return (
    <div className="bg-black text-white flex">
      <div className="pl-5 py-2">
        <img className="h-12" src={logo} alt="Sport See" />
      </div>
      <ul className="list-none flex flex-1 justify-evenly items-center">
        <li>
          <a href="accueil">Accueil</a>
        </li>
        <li>
          <a href="Profil">Profil</a>
        </li>
        <li>
          <a href="reglage">Réglage</a>
        </li>
        <li>
          <a href="communaute">Communauté</a>
        </li>
      </ul>
    </div>
  );
}

export default nav;
