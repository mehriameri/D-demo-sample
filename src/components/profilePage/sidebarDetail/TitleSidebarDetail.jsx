import React from 'react';

function TitlesidebarDetail({title}) {
    return (
        <div className='flex font-bold mb-14 mt-4'>       
            <h6 className='pr-2 border-r-4 border-red-400'> {title}</h6>
        </div>
    )
}

export default TitlesidebarDetail;