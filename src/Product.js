import React from 'react';
import logo from './assets/logo1.png';
import './Product.css';

const Product = () => {
    return(
        <div className="page">
            <section>
                <img src={logo} className="App-logo" alt="logo" />
                <h1>Use React Router and React Transition Group</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum culpa odio.</p>
            </section>
        </div>
    )
}

export default Product;
