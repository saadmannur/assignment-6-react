import React from 'react';
import RenderRating from './RenderRating';

const rating = [
    {
        num: "50K+",
        batch: "Active Users"
    },
    {
        num: "200+",
        batch: "Premium Tools"
    },
    {
        num: "4.9",
        batch: "Rating"
    }
]

const RatingSection = () => {
    return (
        <div className='container mx-auto my-10'>
            <div className='bg-linear-to-r from-blue-500 to-purple-700 rounded-2xl flex justify-between items-center py-5 md:py-15 px-10 md:px-50 mx-auto'>
                {
                    rating.map((item, i) => <RenderRating key={i} item={item}></RenderRating>)
                }
            </div>
        </div>
    );
};

export default RatingSection;