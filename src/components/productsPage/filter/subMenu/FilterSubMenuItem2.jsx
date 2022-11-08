import React from 'react';
const FilterSubMenuItem = ({ dataList }) => {
    return (
        <>
            {dataList.data.map((item, index) => {
                return (
                    <div key={index} className='flex gap-2 items-end border-b border-gray-200 cursor-pointer py-4 mr-4'>
                        <input type="checkBox" />
                        <p className='text-xs font-semibold'>{item.item1}</p>
                        {item.icon
                            ? <img src={item.icon} alt="" className='w-5 h-5 mr-auto' />
                            : <p className='text-xs font-semibold text-gray-400 mr-auto'>{item.item2}</p>
                        }
                    </div>)
            })}
        </>
    )
}

export default FilterSubMenuItem;