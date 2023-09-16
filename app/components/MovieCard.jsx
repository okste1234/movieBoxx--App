import Image from "next/image";
import Link from "next/link";
import React from "react";

const MovieCard = ({ movie }) => {
	return (
		<Link href={`/movie/${movie.id}`} className="mb-20 sm:mb-2 text-start">
			<div className="relative">
				<img
					src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
					width={250}
					height={370}
					objectFit="cover"
					alt={movie.title}
					data-testid="movie-poster"
					className="object-center w-[250px] h-[370px] sm:w-full sm:h-full"
					quality={100}
				/>
				<button className="absolute top-2 flex justify-end w-full pr-2">
					<img src={"/Favorite.svg"} height={30} width={30} alt="favourite" />
				</button>
			</div>

			<div className="py-3">
				<p className="text-gray-400 text-sm font-bold pt-2">
					{movie.original_language}
					<span className="gap-4" data-testid="movie-release-date">
						{movie.release_date}
					</span>
				</p>
			</div>
			<div className="text-gray-900 font-bold text-lg sm:text-xl">
				<p data-testid="movie-title">{movie.title}</p>
			</div>

			<div className="py-3 flex items-center text-start justify-between text-gray-900">
				<div className="flex items-center">
					<Image
						src={"/imdb.svg"}
						width={35}
						height={17}
						alt="imdb logo"
						className="mr-2"
					/>
					<p className="text-base font-normal">{movie.vote_average}/10</p>
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

			<div className="text-gray-400 font-bold text-sm pt-2">
				<p data-testid="movie-genre">Action, Adventure, Horror</p>
			</div>
		</Link>
	);
};

export default MovieCard;
