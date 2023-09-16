import React from "react";

const Pagination = () => {
	return (
		<div className="mx-2 lg:mx-5 text-end hidden md:block">
			<div className="text-gray-400 font-bold text-sm pb-6">
				<p className="pb-2">1</p>
				<p className="pb-2">2</p>

				<p className="text-white text-center font-extrabold flex pb-2">
					<span className="pr-2">—</span>3
				</p>
				<p className="pb-2">4</p>
				<p className="pb-2">5</p>
			</div>
		</div>
	);
};

export default Pagination;
