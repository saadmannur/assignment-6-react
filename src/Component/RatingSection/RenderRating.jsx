import React from 'react';

const RenderRating = ({item}) => {
    return (
        <div className='text-white md:space-y-6 text-center'>
            <h2 className='text-2xl md:text-5xl font-bold'>{item.num}</h2>
            <p>{item.batch}</p>
        </div>
    );
};

export default RenderRating;