import React from 'react';
import { Link } from 'react-router-dom';

const ProductsCard = ({card}) => {
    return (
        <div className="w-11/12 mx-auto">
            <div className="card card-compact bg-base-100 shadow-xl">
                <figure><img src={card.image} alt={card.name} /></figure>
                <div className="card-body">
                <h2 className="card-title">{card.name}</h2>
                <p className='text-xl font-semibold'>{card.brand}</p>
                <p className='text-xl font-semibold'>${card.price}</p>
                <p className='text-xl font-semibold'>Rating: {card.rating}</p>
                <p className='text-xl font-semibold'>{card.type}</p>
                    <div className="card-actions flex justify-around">
                        <Link to={`/product details/${card._id}`}><button className="btn btn-accent">Details</button></Link>
                    
                        <Link to={`/update product/${card._id}`}>
                            <button className="btn btn-accent">Update</button>
                        </Link>
                    </div>
                </div>
            </div>
          
        </div>
    );
};

export default ProductsCard;