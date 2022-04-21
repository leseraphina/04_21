import React from 'react';
import ReactDOM from 'react-dom/client';
// component
import AddApointment from './component/AddApointment';
import Search from './component/Search'
import AddInfo from './component/AddInfo'

// source
import { BiArchive } from "react-icons/bi";
import './index.css'



function App(){
  return (
    <article>
      <h3>
        <BiArchive style={{color:'#d47776'}}/> 
         예약 시스템 
      </h3>
      <AddApointment />
      <Search />
      <div id="list">
        <ul>
          <AddInfo />
        </ul>
      </div>
    </article>
  )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
