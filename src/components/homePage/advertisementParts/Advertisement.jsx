import React from 'react';

const Advertisement = ({ list, classes }) => {
    console.log('Advertisement-rendering')
    return (
        <div className={`w-full grid grid-flow-col grid-rows-2 lg:grid-rows-1 gap-4 my-4 ${classes}`}>
            {list.map((item, index) => <img src={item} key={index} alt="bag" className='w-full rounded-2xl' />)}
        </div >
    )
}

export default Advertisement;