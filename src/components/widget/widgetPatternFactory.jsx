import React from 'react';
import Widget from './widget';
import IconCalorie from '../../assets/icon-widget-calorie.svg';
import IconGlucide from '../../assets/icon-widget-glucide.svg';
import IconLipide from '../../assets/icon-widget-lipide.svg';
import IconProteine from '../../assets/icon-widget-proteine.svg';

/**
 * @module widget
 * @method widgetPatternFactory()
 * @param {String} props 
 * @returns html
 */
function widgetPatternFactory(props) {
  if (props.widgettype === 'calories') {
    return (
      <Widget texte="Calories" chiffre={`${props.chiffre}kCal`} icon={IconCalorie} bgcolor="lightred" />
    );
  }
  if (props.widgettype === 'proteines') {
    return (
      <Widget texte="Proteines" chiffre={`${props.chiffre}g`} icon={IconProteine} bgcolor="lightblue" />
    );
  }
  if (props.widgettype === 'glucides') {
    return (
      <Widget texte="Glucides" chiffre={`${props.chiffre}g`} icon={IconGlucide} bgcolor="lightyellow" />
    );
  }
  if (props.widgettype === 'lipides') {
    return (
      <Widget texte="Lipides" chiffre={`${props.chiffre}g`} icon={IconLipide} bgcolor="lightpink" />
    );
  }
}

export default widgetPatternFactory;
