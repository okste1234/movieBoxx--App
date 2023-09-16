import Image from "next/image";
import Header from "./components/Header";
import FeaturedMovie from "./components/FeaturedMovie";
import Footer from "./components/Footer";
import { API_URL, fetchApi } from "./utils/fetchAPI";

const Home = async () => {

  const movies = await fetchApi(API_URL);
  // console.log(movies)

  return (
    <div className="bg-[#fff] font-sans overflow-x-hidden">
      <header className="p-[.2px] text-white">
        <Header />
      </header>

      <main className="m-auto w-5/6">
        <FeaturedMovie movies={movies}
        />
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default Home


// return {
//   props: {
//     title, postal_path, vote_average, runtime, release_date, overview: movie

//   },
// };