import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter ,Routes ,Route } from 'react-router-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

import NavBar from './components/navBar/NavBar';
import Preview from './components/preview/Preview';
import Profile from './components/profile/Profile';
import Links from './components/links/Links';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>

<BrowserRouter>

<NavBar></NavBar>
<Routes>

  <Route exact path='/links' element={<Links/>}></Route>
  <Route exact path='/profile' element={<Profile/>}></Route>
  <Route exact path='/preview' element={<Preview/>}></Route>

</Routes>

</BrowserRouter>


  </React.StrictMode>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
