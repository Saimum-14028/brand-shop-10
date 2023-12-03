import React from 'react';
import Swal from "sweetalert2";

const MyCartCard = ({card,cart,setCart}) => {

    const { _id, name, image, brand, price, type, rating, description } = card;

  //  console.log(card);

    const handleDelete = _id => {
      //  console.log(_id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {


                fetch(`https://itchy-bonnet-jay.cyclic.app/mycart/${_id}`, {
                    method: 'DELETE',
                  //  mode: 'no-cors',
                    headers: {
                        'content-type': 'application/json',
                      //  'Access-Control-Allow-Origin': '*',
                    },
                })
                    .then(res => res.json())
                    .then(data => {
                     //   console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your Product has been deleted.',
                                'success'
                            )
                            const remaining = cart.filter(car => car._id !== _id);
                            setCart(remaining);
                        }
                    })

            }
        })
    }

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
                    <div className="flex justify-center">
                        <button
                            onClick={() => handleDelete(_id)}
                            className="btn btn-error w-full">Delete
                        </button>
                    </div>
                </div>
            </div>
          
        </div>
    );
};

export default MyCartCard;