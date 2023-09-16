import Image from "next/image";
import Link from "next/link";
import React from "react";

const Movie1 = ({ movie }) => {
	return (
		<div className="w-full xl:w-5/6 relative mx-4 my-6">
			<div className="z-10 h-[449px] relative mb-2">
				<img
					src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
					objectFit="cover"
					alt={movie.title}
					className="absolute -z-10 rounded-3xl w-full h-full"
				/>
				<Link
					href={"#"}
					className="flex flex-col items-center z-10 absolute top-[50%] right-[50%]"
				>
					<div>
						<div className="m-o rounded-full bg-[#E8E8E8]/40 p-9 relative -z-10"></div>
						<Image
							src={"/Play.svg"}
							width={54}
							height={54}
							className="z-10 absolute top-[10%] left-[33%]"
						/>
					</div>
					<h3 className="font-medium text-2xl font-poppins text-[#E8E8E8]/90 pt-2">
						Watch Trailer
					</h3>
				</Link>
			</div>

			<div className="p-1 px-4 flex">
				<div className="w-full xl:w-4/6 mx-2 xl:mx-0">
					<div className="items-start lg:items-center flex flex-col lg:flex-row text-center font-poppins text-[#404040] font-medium text-lg">
						<p className="pr-1 lg:pr-5 items-start lg:items-center flex flex-col lg:flex-row">
							<span data-testid="movie-title">{movie.title}</span>

							<span className="font-normal pr-1 lg:px-5 hidden lg:block">
								•
							</span>
							<span data-testid="movie-release-date">{movie.release_date}</span>
							<span className="font-normal pr-1 lg:px-5 hidden lg:block">
								•
							</span>
							<span className="my-2 lg:my-0">PG-13</span>
							<span className="font-bold pr-1 lg:px-5 hidden lg:block">•</span>
							<span className="pb-4 lg:pb-0" data-testid="movie-runtime">
								{movie.runtime}
							</span>
						</p>
						<p className="mb-4 lg:mb-0 lg:mx-6 text-[#B91C1C] border-[#F8E7EB] text-base font-medium px-4 py-1 rounded-3xl border-solid border-[1px]">
							Action
						</p>
						<p className="lg:ml-6 text-[#B91C1C] border-[#F8E7EB] text-base font-medium px-4 py-1 rounded-3xl border-solid border-[1px]">
							Drama
						</p>
					</div>

					<div className="font-poppins mt-4 text-xl font-normal text-[#333]">
						<p className="pr-2 pb-2" data-testid="movie-overview">
							{movie.overview}
						</p>
						<div>
							<p className="py-7">
								Director :{" "}
								<span className="text-[#BE123C]">Joseph Kosinski</span>
							</p>
							<p>
								Writers :{" "}
								<span className="text-[#BE123C]">
									Jim Cash, Jack Epps Jr, Peter Craig
								</span>
							</p>
							<p className="py-7">
								Stars :{" "}
								<span className="text-[#BE123C]">
									Tom Cruise, Jennifer Connelly, Miles Teller
								</span>
							</p>
						</div>
					</div>
					<div className="bg-white/80 font-poppins text-lg text-[#333] font-medium border-[1px] rounded-xl border-[#C7C7C7] flex items-center justify-between">
						<div className="bg-[#BE123C] rounded-xl flex items-center">
							<p className="text-white py-3 px-5">Top rated movie #65</p>
							<p className="bg-white py-3 pl-8">Awards 9 nominations</p>
						</div>

						<Image
							src={"/Arrow.png"}
							width={30}
							height={30}
							alt="Expand Arrow"
							className="mr-5"
						/>
					</div>
				</div>

				<div className="hidden lg:block lg:w-2/6 font-poppins p-1 px-2">
					<div className="flex itmes-center mb-3">
						<Image src={"/Star.svg"} width={30} height={30} />
						<p className="ml-2 font-medium text-lg">
							{movie.vote_average} <span className="font-bold">| 350k</span>
						</p>
					</div>

					<Link
						href="#"
						className="flex bg-[#BE123C] text-white rounded-xl p-3 border-solid items-center mb-8 text-center"
					>
						<div>
							<Image src={"/Two Tickets.svg"} height={24} width={25} />
						</div>
						<p className="font-bold text-lg ml-1">See Showtimes</p>
					</Link>
					<Link
						href="#"
						className="flex bg-[#BE123C]/20 text-[#333] rounded-xl p-3 border-solid border-[#BE123C] mb-8"
					>
						<Image src={"/List.svg"} height={24} width={25} />
						<p className="font-bold text-lg ml-1">More watch options</p>
					</Link>
					<div className="">
						<img src={"/Rectangle 37.png"} height={229} width="100%" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Movie1;
