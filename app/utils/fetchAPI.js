
export const API_URL = "https://api.themoviedb.org/3/movie/top_rated?api_key=c2b98508e3fc3f5cd908812aede8827e&page=1";

export const apikey = "c2b98508e3fc3f5cd908812aede8827e"

export const fetchApi = async (url) => {

    const res = await fetch(url)
    const data = await res.json()
    return data.results.slice(0, 10)

}
// `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${apiKey}`;


export const idfetchApi = async (url) => {
    const res = await fetch(url)
    const data = await res.json()
    return data.results.slice(0, 1)
}

// // `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${apiKey}`;
// const mov = await fetchApi(API_URL);
// // console.log(mov);
// let id = "";

// mov.map((movi) => {
// 	id = movi.id;
// });

// const movies = await idfetchApi(
// 	`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${apikey}`
// );
// console.log(movies);