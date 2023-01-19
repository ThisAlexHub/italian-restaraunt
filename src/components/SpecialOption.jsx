import React from 'react';
import optionImage1 from '../images/optionImage1.png';

const SpecialOption = ({dish}) => {
    return (
        <section className="special-option">
            <img src={dish.image} alt="Option"/> 
            
            <div>
                
                <div className="option-header">
                    <p className="text">{dish.name}</p>
                    <p className="text">{dish.price}</p>
                </div>
                
                <article className="text description">{dish.description}</article>
                <p className="text">Order a delivery</p>
                
            </div>
        </section>
    );
};

export default SpecialOption;