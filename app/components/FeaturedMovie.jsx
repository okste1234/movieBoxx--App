import React from "react";
import MovieCard from "./MovieCard";
import Image from "next/image";

const FeaturedMovie = ({ movies }) => {
	return (
		<div className="mt-20 flex items-center flex-col">
			<div className="items-center flex-nowrap flex flex-col sm:flex-row justify-between w-full">
				<div className="text-black font-bold text-4xl">
					<h1>Featured Movie</h1>
				</div>

				<button className="gap-2 flex items-center">
					<p className="text-red-700 text-lg">See more</p>
					<Image
						src="/chevron.svg"
						width={20}
						height={20}
						alt="see more"
						quality={100}
					/>
				</button>
			</div>

			{movies?.length > 0 ? (
				<div className="w-3/6 sm:w-full cursor-pointer sm:grid sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-24 py-10 text-center">
					{movies.map((movie) => (
						<MovieCard data-testid="movie-card" key={movie.id} movie={movie} />
					))}
				</div>
			) : (
				<div className=" py-10 w-full text-red-700/60">
					<img
						src="https://via.placeholder.com/400"
						width={250}
						height={370}
						alt="no movie"
					/>
					<h3 className="my-4">No movies found!!!</h3>
				</div>
			)}
		</div>
	);
};

export default FeaturedMovie;
