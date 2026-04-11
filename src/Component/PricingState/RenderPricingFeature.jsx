import { BadgeCheck } from 'lucide-react';
import React from 'react';

const RenderPricingFeature = ({ feature, isMostPopular }) => {
    return (
        <li className='flex items-center gap-2'>
            {
                isMostPopular ? <BadgeCheck color="white" /> : <BadgeCheck color="green" />
            }
            {feature}
        </li>
    );
};

export default RenderPricingFeature;