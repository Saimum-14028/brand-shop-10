import React, { createContext, useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from './AuthProvider';

const AvailableBrands = ({cards}) => {

    return (
        <div className="w-11/12 mx-auto">
            <h1 className="text-5xl font-bold text-center">Available Brands</h1>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-10'>
                {
                    cards?.map(card=><Link to={`/products/${card.brand}`} key={card.brand}>
                            <div className="card card-compact bg-base-100 shadow-xl">
                                <figure className='h-48'><img src={card.image} alt={card.brand} /></figure>
                                <h2 className="text-center text-2xl font-semibold py-1">{card.brand}</h2>
                            </div>
                        </Link>
                     )
                }
            </div>
        </div>
    );
};

export default AvailableBrands;