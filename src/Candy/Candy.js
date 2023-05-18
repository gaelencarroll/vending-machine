import React from 'react';
import './Candy.css';
import candyImage from './candy.jpg'
import { Link } from "react-router-dom";

function Candy(){
    return(
        <section className='candy-section' style={{backgroundImage: `url(${candyImage})`}}>
            <p className='words'>OMG SUGARRRRR</p>
            <p className='go-back'><Link to='/'>go back</Link></p>
        </section>
    )
}

export default Candy;