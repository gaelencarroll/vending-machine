import React from 'react';
import './VendingMachine.css';
import vendingMachineImage from './vending_machine.jpg'
import { Link } from "react-router-dom";

function VendingMachine(){
    return(
        <section className='vending-machine-section' style={{backgroundImage: `url(${vendingMachineImage})`}}>
            <section className='title-section'>
                <h1>Hello I am a vending machine. What would you like to eat?</h1>
            </section>
            <section className='links-section'>
                <h2><Link to='/candy'>candy</Link></h2>
                <h2><Link to='/chips'>chips</Link></h2>
                <h2><Link to='/cookies'>cookies</Link></h2>
            </section>
        </section>
    )
}

export default VendingMachine;