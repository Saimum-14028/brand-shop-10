import React from 'react';

const ProductsDetailsCard = ({productDetails}) => {

    const handleProduct = () => {

    }

    return (
        <div className="w-11/12 mx-auto">
          <div className="hero min-h-screen" style={{backgroundImage: `url(https://i.ibb.co/MhWT1VY/pexels-ivan-babydov-7789846.jpg)`}}>
          </div>
          <h1 className="text-4xl font-bold my-5">{productDetails.name}</h1>
          <p className="card-title text-red-500 my-5">$Price: {productDetails.price}</p>
          <p className="text-base font-normal text-justify mb-10">{productDetails.description}</p>
          <div className="card-actions justify-end">
            <button onClick={handleProduct} className="btn btn-wide bg-red-500 mb-5">Add Now</button>
          </div>
      </div>
    );
};

export default ProductsDetailsCard;