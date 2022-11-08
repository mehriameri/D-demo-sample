import React from "react";

const SwitchToggleBtn = ({ id }) => {
	return (
		<label
			htmlFor={`default-${id} `}
			className="inline-flex relative items-center cursor-pointer"
		>
			<input
				type="checkbox"
				value=""
				id={`default-${id} `}
				className="sr-only peer"
			/>
			<div
				className="w-8 h-4 bg-white border border-gray-300 peer-focus:outline-none 
               rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full
               peer-checked:after:border-white after:content-[''] after:absolute 
               after:top-[2px] after:left-[4px] after:bg-gray-400 after:border-gray-300 
               after:border after:rounded-full after:h-3 after:w-3 after:transition-all 
               peer-checked:bg-teal-400 "
			></div>
		</label>
	);
};

export default SwitchToggleBtn;
