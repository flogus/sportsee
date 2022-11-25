import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Sidebar from './components/sidebar/sidebar';
import Nav from './components/nav/nav';
import Graphics from './components/graphics/graphics';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className="flex flex-col h-full">
      <Nav />
      <div className="flex flex-row flex-1 sidebar-and-graphcs">
        <Sidebar />
        <Graphics />
      </div>
    </div>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
