import React from 'react';
import './Chips.css';
import chipsImage from './chips.jpg'
import { Link } from "react-router-dom";

function Chips(){
    return(
        <section className='chips-section' style={{backgroundImage: `url(${chipsImage})`}}>
            <p className='words'>yay! doritos !!!!</p>
            <p className='go-back'><Link to='/'>go back</Link></p>
        </section>
    )
}

export default Chips;