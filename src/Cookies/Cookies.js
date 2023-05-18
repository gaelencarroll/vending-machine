import React from 'react';
import './Cookies.css';
import cookiesImage from './cookies.jpg'
import { Link } from "react-router-dom";

function Cookies(){
    return(
        <section className='cookies-section' style={{backgroundImage: `url(${cookiesImage})`}}>
            <p className='words'>oreos, yum!!!!</p>
            <p className='go-back'><Link to='/'>go back</Link></p>
        </section>
    )
}

export default Cookies;