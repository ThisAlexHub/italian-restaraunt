import React, { useState } from 'react';


const BookingForm = ({availableTimes, onFormSubmit, dispatch}) => {
    return (
        <form onSubmit={onFormSubmit}>
            <label htmlFor="choose-date">Choose date</label>
            <input type="date" id="res-date" required onChange={e => dispatch({type:"date", value: e.target.value})} />
            <label htmlFor="choose-time">Choose time</label>
            <select id="res-time" onChange={e => dispatch({type:"time", value: e.target.value})}>

                {availableTimes.map((time, index) => 
                    <option key={index}>{time}</option>
                )}
            </select>
            <label htmlFor="guests">Number of guests</label>
            <input type="number" placeholder="1" min="1" max="10" id="guests"  onChange={e => dispatch({type:"guests", value: e.target.value})}/>
            <label htmlFor="occasion">Occasion</label>
            <select id="occasion" onChange={e => dispatch({type:"occasion", value: e.target.value})}>
                <option>Birthday</option>
                <option>Anniversary</option>
            </select>
            <input type="submit" value="Make Your reservation"  aria-label="On Click"/>

        </form>
    );
};

export default BookingForm;