import React from 'react';
import SpecialOption from './SpecialOption';
import optionImage1 from '../images/optionImage1.png';
import optionImage2 from '../images/optionImage2.png';
import optionImage3 from '../images/optionImage3.png';
import { Link } from "react-router-dom";


const dishes = [
    {name: 'Greek salad', 
    description:'The famous greek salad of crispy lettuce, peppers, olives,and our Chicago style feta cheese, garnished withcroutons.',
    price: '$12.99',
    image: optionImage1,
    index:1},
    {name: 'Brechutta', 
    description:'Our Bruschetta is amde from grilled bread that has been smeared with garlic and seasoned with salt and oilve oil.',
    price: '$5.99',
    image: optionImage2,
    index:2
    },
    {name: 'Lemon Dessert', 
    description:'This comes straight from grandma’s reci[e book, every last ingredient has beemn sourced and it as aythentic as can be imagined',
    price: '$5.00',
    image: optionImage3,
    index:3
    }

];

const Specials = () => {
    return (
        <>
            <section className='specials'>     
                <h1>This weeks specials!</h1>
                <Link to="/menu">
                    <button className="menu-btn" aria-label="On Click">Online menu</button>
                </Link>
            </section>
            <section className="special-options">

                {dishes.map((dish, index) => 
                    <SpecialOption dish={dish} key={index}/>
                )}
               
            </section>
        </>
        
    );


};

export default Specials;