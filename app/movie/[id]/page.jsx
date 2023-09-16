"use client";

import { useParams } from "next/navigation";
import Movie1 from "@/app/components/Movie1";
import SideBar from "@/app/components/SideBar";
import React, { useEffect, useState } from "react";
import { API_URL, fetchApi, apikey } from "@/app/utils/fetchAPI";

const Page = () => {
	const { id } = useParams();
	const [movies, setMovies] = useState([]); // Initialize a state variable for movies

	useEffect(() => {
		async function fetchData() {
			try {
				const apiUrl = `https://api.themoviedb.org/3/movie/${id}?api_key=c2b98508e3fc3f5cd908812aede8827e`;
				const response = await fetch(apiUrl);
				const data = await response.json();
				const movies = data;
				console.log(movies);

				// Set the movies data in the state
				setMovies(movies);
				console.log(movies);
			} catch (error) {
				console.error("Error:", error);
			}
		}

		fetchData(); // Call the fetchData function when the component mounts
	}, []); // Empty dependency array ensures this effect runs once when the component mounts

	return (
		<div className="w-full bg-[#fff] text-black font-sans overflow-x-hidden flex">
			<SideBar />

			{movies ? (
				<Movie1 key={movies.id} movie={movies} />
			) : (
				<div className="py-10 w-3/6 text-red-700/60">
					<img
						src="https://via.placeholder.com/400"
						width={250}
						height={370}
						alt="no movie"
					/>
					<h3 className="my-4">No movies found!!!:{id}</h3>
				</div>
			)}
		</div>
	);
};

export default Page;
