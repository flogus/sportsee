import React from 'react';
import Widget from './widget'
import IconCalorie from '.././../assets/icon-widget-calorie.svg'
import IconGlucide from '.././../assets/icon-widget-glucide.svg'
import IconLipide from '.././../assets/icon-widget-lipide.svg'
import IconProteine from '.././../assets/icon-widget-proteine.svg'

function widgetPatternFactory(props) {
    if(props.widgettype === 'calories') {
        return(
            <Widget texte="Calories" chiffre="1,930kCal" icon={IconCalorie} bgcolor="lightred"/>
        )
    }
    if(props.widgettype === 'proteines') {
        return(
            <Widget texte="Proteines" chiffre="155g" icon={IconProteine} bgcolor="lightblue" />
        )
    }
    if(props.widgettype === 'glucides') {
        return(
            <Widget texte="Glucides" chiffre="290g" icon={IconGlucide} bgcolor="lightyellow" />
        )
    }
    if(props.widgettype === 'lipides') {
        return(
            <Widget texte="Lipides" chiffre="50g" icon={IconLipide} bgcolor="lightpink" />
        )
    }
}

export default widgetPatternFactory