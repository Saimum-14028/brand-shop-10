import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import ProductDetailsCard from './ProductDetailsCard';


const ProductsCardDetails = () => {

    const [productDetails, setproductDetails] = useState({});

    const { id } = useParams();

    const datas = useLoaderData();

   // console.log(datas);

    useEffect(() => {
        const findproductDetails = datas?.find((data) => data._id === id);

        setproductDetails(findproductDetails);
    }, [id, datas]);

   //  console.log(id, productDetails);
    return (
        <div>
            <ProductDetailsCard productDetails={productDetails}></ProductDetailsCard>
        </div>
    );
};

export default ProductsCardDetails;