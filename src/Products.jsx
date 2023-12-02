import React, { useContext, useState } from 'react';
import { Link, useLoaderData, useParams } from 'react-router-dom';
import { AuthContext } from './AuthProvider';
import ProductsCard from './ProductsCard';

const Products = () => {

    const [isShow,setIsShow] = useState(false)
    // const {result} = useContext(AuthContext);
     const products = useLoaderData();
  //   console.log(products);
     const { id } = useParams();
     console.log(id);
     const newProducts = products.filter(product => product.brand === id);
    // console.log(result);

    return (
        <div className='w-11/12 mx-auto my-5'>
            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full h-1/2">
                    <img src="https://i.ibb.co/Y8SYZLV/pexels-karolina-grabowska-5632386.jpg" className="w-full h-48 md:h-72" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle">❮</a> 
                    <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div> 
                <div id="slide2" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/sgBhTDv/pexels-sora-shimazaki-5926239.jpg" className="w-full h-48 md:h-72" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a> 
                    <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div> 
                <div id="slide3" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/sRBVrgB/pexels-monstera-production-5849576.jpg" className="w-full h-48 md:h-72" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a> 
                    <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div> 
            </div>

            <div>

                {newProducts.length ? 
                
                <div>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 py-10'>
                {
                            isShow ? newProducts.map((card) => (
                                <ProductsCard key={card._id} card={card}></ProductsCard>
                            )) 

                            : newProducts.slice(0,4).map((card) => (
                                <ProductsCard key={card._id} card={card}></ProductsCard>
                            ))
                        }
                    </div>

                    <div className="flex justify-center items-center">
                        {newProducts.length > 4 && !isShow && <button onClick={()=>setIsShow(!isShow)}  className="btn btn-accent text-white bg-red-500">
                            See All
                    </button>}
                    </div>
                </div>
                 : 
                 <div className='w-full'>
            <h1 className="text-5xl font-bold mt-10 text-center">No Product Found!</h1>
            <div className='w-1/12 mx-auto my-10'>
            <Link to="/"><button className='btn btn-accent'>Go Home</button></Link>
            </div>
        </div>}
            </div>
        </div>
    );
};

export default Products;