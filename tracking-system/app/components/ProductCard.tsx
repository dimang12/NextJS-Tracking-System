'use client';
import React from 'react';
import styles from './ProductCard.module.css';

const ProductCard: React.FC = () => {
    const handleClick = () => {
        console.log('Button clicked!');
    };

    return (
        <div>
            <h2>Product Card</h2>
            <p>This is a product card.</p>
            <div className='flex'>
                <button className="btn btn-accent"
                    onClick={handleClick}>Click me</button>
            </div>

        </div>
    );
};

export default ProductCard;