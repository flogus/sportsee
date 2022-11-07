import React from 'react';
import GraphRadar from '../graphRadar/graphRadar'
import GraphLineChart from '../graphLineChart/graphLineChart'
import GraphPie from '../graphPie/graphPie'

function graphSquareWidget(props) {
    if(props.graphtype === 'radar') {
        return(
            <div className={props.bgcolor}>
                <GraphRadar />
            </div>
        )
    }
    if(props.graphtype === 'bar') {
        return(
            <div className={props.bgcolor}>
                <GraphLineChart />
            </div>
        );
    } 
    if(props.graphtype === 'circle') {
        return(
            <div className={props.bgcolor}>
                <GraphPie />
            </div>
        );
    }
}

export default graphSquareWidget