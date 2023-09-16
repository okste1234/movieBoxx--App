import React from "react";
import DescriptionBox from "./DescriptionBox";
import Pagination from "./Pagination";

const HeaderDetails = () => {
	return (
		<div className="m-auto items-center flex justify-evenly md:justify-between w-5/6 md:w-full">
			<DescriptionBox />

			<Pagination />
		</div>
	);
};

export default HeaderDetails;
