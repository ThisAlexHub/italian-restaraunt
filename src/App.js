import './App.css';
import { Routes, Route } from "react-router-dom"
import React, { useState,useReducer} from 'react';
import Homepage from './components/Homepage';
import Menu from './components/Menu';
import Reservations from './components/Reservations';
import OrderOnline from './components/OrderOnline';
import Login from './components/Login';
import NoPage from './components/NoPage';

import {fetchAPI, submitAPI} from './APIs/random';
import AboutUs from './components/AboutUs';

function App() {

  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState('');
  const [occasion, setOccasion] = useState('');


  const updateTimes = (availableTimes, action) => {
    if (action.type === 'guests') setGuests(action.value);
    if (action.type === 'occasion') setOccasion(action.value);
    if (action.type === 'time') setTime(action.value);
    if (action.type === 'date') setDate(action.value);

    
    if (date){
      let tempDate = date.replaceAll('-', '.');
      return fetchAPI(new Date(tempDate));
    } else {
      return fetchAPI(new Date(new Date().toLocaleDateString()));
    }
    
  }


  let initializeTimes = fetchAPI(new Date(new Date().toLocaleDateString()));
  
  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes);



  const onFormSubmit = (event) => {
      event.preventDefault();
  }


  return (
    <>
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route path="/reservations" 
          element={<Reservations 
            availableTimes={availableTimes}
            onFormSubmit={onFormSubmit}
            dispatch={dispatch}
          />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/order-online" element={<OrderOnline />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NoPage />} />
     
      </Routes>
    </>
  );
}

export default App;
