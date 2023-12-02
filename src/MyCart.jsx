import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import MyCartCard from './MyCartCard';

const MyCart = () => {

    const [isShow,setIsShow] = useState(false)
    // const {result} = useContext(AuthContext);
    const myCart = useLoaderData();
    const [cart, setCart] = useState(myCart);

    return (
        <div className='w-11/12 mx-auto my-5'>
            <div>

{myCart.length ? 

<div>
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 py-10'>
{
            isShow ? cart.map((card) => (
                <MyCartCard key={card._id} card={card}
                cart={cart}
                setCart={setCart}></MyCartCard>
            )) 

            : cart.slice(0,4).map((card) => (
                <MyCartCard key={card._id} card={card}
                cart={cart}
                setCart={setCart}></MyCartCard>
            ))
        }
    </div>

    <div className="flex justify-center items-center">
        {cart.length > 4 && !isShow && <button onClick={()=>setIsShow(!isShow)}  className="btn btn-accent text-white bg-red-500">
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

export default MyCart;