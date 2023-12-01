import React from 'react';

const Products = () => {
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
        </div>
    );
};

export default Products;