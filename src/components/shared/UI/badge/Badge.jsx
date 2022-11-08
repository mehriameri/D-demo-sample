import React from "react";

const Badge = ({ children }) => {
	return (
		<span className="bg-red-500 text-white text-xs rounded-full py-1 px-2">
			{children}
		</span>
	);
};

export default Badge;
