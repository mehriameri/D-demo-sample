import React from 'react';

function SwitchCheckbox() {
    return (
        <label for="default-toggle" className="inline-flex relative items-center cursor-pointer">
            <input type="checkbox" value="" id="default-toggle" class="sr-only peer" />
            <div
                className="w-11 h-6 bg-gray-200 peer-focus:outline-none 
                       rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full
                       peer-checked:after:border-white after:content-[''] after:absolute 
                       after:top-[2px] after:left-[2px] after:bg-red-600 after:border-gray-300 
                       after:border after:rounded-full after:h-5 after:w-5 after:transition-all 
                       peer-checked:bg-red-400 ">
            </div>
        </label>
    )
}

export default SwitchCheckbox;