import React from 'react';
import About from './About';
import Specials from './Specials';

const Main = () => {

    return (
        <>
            <main className="main-background">
                <About />
            </main>
            <Specials />
        </>
    );
};

export default Main;