import React, { useState } from 'react';
import Header from './Header';
import BookingForm from './BookingForm';

const Reservations = ({availableTimes, onFormSubmit, dispatch}) => {

    return (
        <>
            <Header />
            <section className="reservation">
                <h1>Reservations</h1>
                <BookingForm 
                    availableTimes={availableTimes}
                    onFormSubmit={onFormSubmit}
                    dispatch={dispatch}
                />
            </section>
        </>
    );
};

export default Reservations;