import React, { useState } from "react";
import useDeviceType from "../../../hooks/useDeviceType";
import { ArrowBottomIcon, ArrowLeftIcon } from "../../shared/UI/Icons";
import FilterSubMenuItem2 from "./subMenu/FilterSubMenuItem2";
import FilterSubMenuItem from "./subMenu/FilterSubMenuItem";
import useFetch from "../../../hooks/useFetch";
import RangeSlider from "../../shared/UI/rangeSlider/RangeSlider";
import SwitchToggleBtn from "../../shared/UI/toggleSwitch/SwitchToggleBtn";

const FilterMenuItem = ({ dataList, idBtn }) => {
	const [showSubMenu, setShowSubMenu] = useState(false);
	const [subMenuId, setSubMenuId] = useState("");
	const { isMobile } = useDeviceType();
	const showSubMenuHandler = () => {
		setShowSubMenu(!showSubMenu);
		setSubMenuId(dataList.id);
		console.log(dataList.id);
	};
	const { data: filterItem } = useFetch({
		url: `http://localhost:8000/menuList?id=${subMenuId}`,
		dependency: [subMenuId],
	});

	return (
		<div className="border-b border-gray-200 bg-white cursor-pointer mx-6 lg:mx-0">
			<div
				className="flex justify-between items-center py-6 lg:py-5"
				onClick={showSubMenuHandler}
			>
				<div className="flex gap-2">
					<p className="text-sm font-semibold">{dataList.title}</p>
					{dataList.icon && <img src={dataList.icon} className="w-4 h-4" />}
				</div>
				{dataList.switchBtn
					? <SwitchToggleBtn id={idBtn} />
					: isMobile
						? <ArrowLeftIcon className="w-4 h-4 text-gray-500" />
						: <ArrowBottomIcon className="w-3 h-3 text-gray-400" />}
			</div>
			{showSubMenu &&
				filterItem?.map((item, index) => {
					return (
						<>
							{subMenuId == 1
								? <FilterSubMenuItem key={index} dataList={item} />
								: subMenuId == 6
									? <RangeSlider />
									: <FilterSubMenuItem2 key={index} dataList={item} />}
						</>
					);
				})}
		</div>
	);
};

export default FilterMenuItem;
