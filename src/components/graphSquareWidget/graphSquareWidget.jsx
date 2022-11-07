import React from 'react';
import GraphRadar from '../graphRadar/graphRadar'
import GraphLineChart from '../graphLineChart/graphLineChart'
import GraphPie from '../graphPie/graphPie'

function graphSquareWidget(props) {
    if(props.graphtype === 'bar') {
        return(
            <div className={props.bgcolor + " flex basis-4/12 justify-center items-center mr-3 rounded-md"}>
                <GraphLineChart />
            </div>
        );
    }
    if(props.graphtype === 'radar') {
        return(
            <div className={props.bgcolor + " flex basis-4/12 justify-center items-center mx-3 rounded-md"}>
                <GraphRadar />
            </div>
        )
    }
    if(props.graphtype === 'circle') {
        return(
            <div className={props.bgcolor + " flex basis-4/12 justify-center items-center ml-r rounded-md"}>
                <GraphPie />
            </div>
        );
    }
}

export default graphSquareWidget