import Modal from "@/components/Modal";
import MovieRow from "@/components/MovieRow";
import Preview from "@/components/Preview";
import requests from "@/utils/requests";



export default async function Home() {
  const [
    netflixOriginals,
    trendingNow,
    topRated,
    actionMovies,
    comedyMovies,
    romanceMovies,
  ] = await Promise.all([
    fetch(requests.fetchNetflixOriginals).then((res) => res.json()),
    fetch(requests.fetchTrending).then((res) => res.json()),
    fetch(requests.fetchTopRated).then((res) => res.json()),
    fetch(requests.fetchActionMovies).then((res) => res.json()),
    fetch(requests.fetchComedyMovies).then((res) => res.json()),
    fetch(requests.fetchRomanceMovies).then((res) => res.json()),
  ]);
  


  return (
    <>
      <section className="relative flex h-screen flex-col pt-32 justify-between">
      <Preview billboard={trendingNow?.results[Math.floor(Math.random() * trendingNow?.results.length)]}/>
      </section>
      <section className="-mt-36">
        <MovieRow title="Trends" movies={trendingNow?.results} />
        <MovieRow title="Originals" movies={netflixOriginals?.results} />
        <MovieRow title="Top rated" movies={topRated?.results} />
        <MovieRow title="Actions" movies={actionMovies?.results} />
        <MovieRow title="Comedies" movies={comedyMovies?.results} />
        <MovieRow title="Romances" movies={romanceMovies?.results} />
      </section>
      <Modal/>
    </>   
  )
}
