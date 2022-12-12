import React from 'react';
import GraphRadar from './graphs/graphRadar/graphRadar';
import GraphLineChart from './graphs/graphLineChart/graphLineChart';
import GraphPie from './graphs/graphPie/graphPie';

function graphWidgetFactory(props) {
  if (props.data === '') {
    return (
      <div></div>
    );
  }
  if (props.graphtype === 'bar') {
    return (
      <div className={`${props.bgcolor} flex flex-col basis-4/12 justify-center items-center mr-0 mb-3 lg:mr-3 lg:mb-0 rounded-md`}>
        <div className="px-2 pt-4 text-white opacity-60 font-medium text-lg">Durée moyenne des sessions</div>
        <GraphLineChart data={props.data} />
      </div>
    );
  }
  if (props.graphtype === 'radar') {
    return (
      <div className={`${props.bgcolor} flex basis-4/12 justify-center items-center mx-0 mb-3 lg:mx-3 lg:mb-0 rounded-md`}>
        <GraphRadar data={props.data} />
      </div>
    );
  }
  if (props.graphtype === 'circle') {
    return (
      <div className={`${props.bgcolor} flex basis-4/12 justify-center items-center ml-0 lg:ml-3 rounded-md`}>
        <GraphPie data={props.data} />
      </div>
    );
  }
}

export default graphWidgetFactory;
