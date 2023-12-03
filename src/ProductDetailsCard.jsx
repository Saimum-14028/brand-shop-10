import React from 'react';
import swal from 'sweetalert';

const ProductDetailsCard = ({productDetails}) => {

    const handleProduct = () => {
        
        const name = productDetails.name;
        const image = productDetails.image;
        const brand = productDetails.brand;
        const price = productDetails.price;
        const type = productDetails.type;
        const rating = productDetails.rating;
        const description = productDetails.description;

        const newProduct = { name, image, brand, price, type, rating, description };

        //console.log(newProduct);

        // send data to the server
        fetch('https://my-brand-shop-server-side-7g41jsnva-saimum-140128s-projects.vercel.app/mycart', {
            method: 'POST',
            headers: {
                'Access-Control-Allow-Origin': '*',
                'content-type': 'application/json'
            },
            body: JSON.stringify(newProduct)
        })
            .then(res => res.json())
            .then(data => {
               // console.log(data);
                if(data.insertedId){
                    swal("Done!", "Product Added to Your Cart!", "success");
                }
            })
            .catch(error => {
                //    console.log(error);
                    swal("Error!", error.message, "error");
                   // toast.error(error.message)
                })

    }

    return (
        <div className="w-11/12 mx-auto">
          <div className="hero h-48 md:h-72 lg:h-96" style={{backgroundImage: `url(${productDetails.image})`}}>
          </div>
          <h1 className="text-4xl font-bold my-5">{productDetails.name}</h1>
          <p className="card-title my-5">Brand: {productDetails.brand}</p>
          <p className="card-title my-5">Rating: {productDetails.rating}</p>
          <p className="card-title text-red-500 my-5">$Price: {productDetails.price}</p>
          <p className="text-base font-normal text-justify mb-10">{productDetails.description}</p>
          <div className="card-actions justify-end">
            <button onClick={handleProduct} className="btn btn-wide bg-red-500 mb-5">Add to Cart</button>
          </div>
      </div>
    );
};

export default ProductDetailsCard;