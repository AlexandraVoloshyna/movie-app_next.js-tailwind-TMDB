import Modal from "@/components/Modal";
import MovieRow from "@/components/MovieRow";
import Preview from "@/components/Preview";
import requests from "@/utils/requests";



export default async function New() {
  const [
    trendingNow,
    newTV,
    popMovies,
    newMovies,
    popTV,
  ] = await Promise.all([
    fetch(requests.fetchTrending).then((res) => res.json()),
    fetch(requests.fetchNewTv).then((res) => res.json()),
    fetch(requests.fetchPopularMovies).then((res) => res.json()),
    fetch(requests.fetchNewMovies).then((res) => res.json()),
    fetch(requests.fetchPopTv).then((res) => res.json()),
    
  ]);
  


  return (
    <>
      <section className="relative flex h-screen flex-col pt-32 justify-between">
      <Preview billboard={trendingNow?.results[Math.floor(Math.random() * trendingNow?.results.length)]}/>
      </section>
      <section className="-mt-36">
        <MovieRow title="Trends" movies={trendingNow?.results} />
        <MovieRow title="New TV Shows" movies={newTV?.results} />
        <MovieRow title="Popular Movies" movies={popMovies?.results} />
        <MovieRow title="New Movies" movies={newMovies?.results} />
        <MovieRow title="Popular TV Shows" movies={popTV?.results} />
      </section>
      <Modal/>
    </>   
  )
}
