import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import {BrowserRouter, Route} from "react-router-dom";
import ListDemo from './ListDemo'
import 'antd/dist/antd.css';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Route path='/list/:id' component={ListDemo}/>
    </BrowserRouter>
    {/*<App/>*/}
  </React.StrictMode>,
  document.getElementById('root')
);
