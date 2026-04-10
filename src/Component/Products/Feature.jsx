import { CircleCheckBig } from 'lucide-react';
import React from 'react';

const Feature = ({feature}) => {
    // console.log(feature)
    return (
        <div className='flex items-center gap-2'>
            <span><CircleCheckBig color="green" /></span>
            <li className='text-gray-500'>{feature}</li>
        </div>
    );
};

export default Feature;