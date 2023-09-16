import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import  Home from './Routes/Home'
import  Favs from './Routes/Favs'
import  Detail from './Routes/Detail'
import  Contact from './Routes/Contact'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import themeProvider from './Context/themeProvider'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Routes>
      <Route path='/' element={<App/>}> 
        <Route path = 'home' element={<Home/>} />
        <Route path = 'favs' element={<Favs/>} />
        <Route path = 'detail/:id' element={<Detail/>} />
        <Route path = 'contact' element={<Contact/>} />
      </Route>
    </Routes>
    <themeProvider>
      <App/>
    </themeProvider>
      
      
  </React.StrictMode>
);


