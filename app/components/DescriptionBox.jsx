import Image from "next/image";
import React from "react";

const DescriptionBox = () => {
	return (
		<div className="text-start mt-11 mx-3 xl:ml-36 xl:p-3">
			<div className="font-bold text-6xl">
				<h1>
					John Wick 3 : <br></br>Parabellum
				</h1>
			</div>

			<div className="flex items-center text-start justify-between w-52 my-5">
				<div className="flex items-center p-2">
					<Image
						src={"/imdb.svg"}
						width={35}
						height={17}
						alt="imdb logo"
						className="mr-2"
					/>
					<p className="text-base font-sans font-normal">86.0 / 100</p>
				</div>
				<div className="flex items-center justify-between">
					<Image
						src={"/tomato.svg"}
						width={16}
						height={17}
						alt="tomato"
						className="mr-2"
					/>
					<p className="text-base font-normal">97%</p>
				</div>
			</div>

			<div className="my-4 w-[326px]">
				<p className="text-base font-[500px]">
					John Wick is on the run after killing a member of the international
					assassins' guild, and with a $14 million price tag on his head, he is
					the target of hit men and women everywhere.
				</p>
			</div>

			<div>
				<button className="bg-[#BE123C] border-solid rounded-md py-4 px-[6px] flex gap-2 items-center">
					<Image src={"/Play.svg"} width={20} height={20} alt="play" />
					<p className="uppercase font-bold text-base">Watch trailer</p>
				</button>
			</div>
		</div>
	);
};

export default DescriptionBox;
