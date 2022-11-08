import React, { useEffect, useState } from 'react';
import useFetch from '../../../hooks/useFetch';
import ProductCard from './ProductCard';

const ProductAdvertisementCard = () => {
    const [advetisementId, setAdvetisementId] = useState(0);
    const { data: productsInfo } = useFetch({ url: " http://localhost:8000/products?Advertisement=yes" });
    useEffect(() => {
        const interval = setInterval(() => {
            setAdvetisementId(prevState => prevState + 1)
        }, 10000);
        advetisementId == productsInfo?.length && setAdvetisementId(0);
        return () => clearInterval(interval)
    }, [advetisementId])

    return (
        productsInfo?.map((item, index) => <ProductCard key={index} dataList={item} classes='rounded-lg' />)[advetisementId]
    )
}

export default ProductAdvertisementCard;