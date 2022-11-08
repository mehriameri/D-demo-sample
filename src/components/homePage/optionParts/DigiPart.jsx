import React from 'react';
import digiImage from '../../../data/jsonFiles/body/digiImage.json';
import { DotesIcon } from '../../shared/UI/Icons';

const DigiPart = () => {
    console.log('DigiPart-rendering')
    return (
        <div className='grid lg:grid-rows-1 grid-flow-col grid-rows-2 gap-y-4 my-8 w-5/6 mx-auto'>
            {digiImage.map((item, index) =>
                <div key={index}>
                    <img src={item.img} alt="" className='w-12 h-12 mx-auto' />
                    <p className='text-xs text-center py-2'>{item.title} </p>
                </div>)}
            <div className='grid '>
                <span className='bg-gray-200 rounded-full m-auto p-3'>
                    <DotesIcon className="text-gray-600 w-7 h-7" />
                </span>
                <p className='text-xs text-center py-2'> بیشتر </p>
            </div>
        </div>
    )
}

export default DigiPart;