import React, { useEffect, useState } from 'react';
import Banner from './Banner';
import About from './About';
import Feedback from './Feedback';
import AvailableBrands from './AvailableBrands';

const Home = () => {

  const [cards,setCards] = useState()

    useEffect(()=>{
        fetch('/data.json')
        .then(res=>res.json())
        .then(data => setCards(data))

    },[])

    return(
        <div>
          <Banner></Banner>
          <AvailableBrands cards={cards}></AvailableBrands>
          <About></About>
          <Feedback></Feedback>
        </div>
    );
};

export default Home;