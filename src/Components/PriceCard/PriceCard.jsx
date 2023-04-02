import React from 'react';
import Feature from '../Feature/Feature';

const PriceCard = ({price}) => {
    return (
        <div className='bg-indigo-400 mt-4 rounded-md p-4 flex flex-col'>
            <h2 className=' text-center'>
            <span className='text-purple-700 text-5xl font-extrabold'>{price.price}</span>
            <span  className='text-2xl font-bold text-white'>/mon</span>
            </h2>
            <h5 className='text-2xl my-6 font-bold  text-center'>{price.name}</h5>
            <p className='text-white underline font-bold'>Features : </p>
            {
                price.features.map((feature , idx) => <Feature 
                    key={idx}
                    feature={feature}></Feature>)
            }
            <button className='w-full mt-auto bg-green-500 py-2 hover:bg-green-700 text-white font-bold rounded-md'>Buy Now</button>
        </div>
    );
};

export default PriceCard;