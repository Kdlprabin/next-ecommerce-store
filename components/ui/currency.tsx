"use client"

import React from 'react';
import { formatter } from '@/lib/utils';


interface CurrencyProps {
    value: number | string;
}


const Currency: React.FC<CurrencyProps> = ({
    value
}) => {

    const [isMounted, setIsMounted] = React.useState(false)
    
    React.useEffect(() => setIsMounted(true), [])
    if (!isMounted) {
        return null
    }

    return (
        <div className='font-semibold'>
            {
                formatter.format(Number(value))
            }
        </div>
    );
}

export default Currency;
