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
