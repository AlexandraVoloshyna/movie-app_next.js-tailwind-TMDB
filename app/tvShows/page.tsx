import Modal from "@/components/Modal";
import MovieRow from "@/components/MovieRow";
import Preview from "@/components/Preview";
import requests from "@/utils/requests";



export default async function Shows() {
  const [
    topShows,
    trendingNow,
    comedyShows,
    dramaShows,
    onAir,
  ] = await Promise.all([
    fetch(requests.fetchPopularTv).then((res) => res.json()),
    fetch(requests.fetchTrending).then((res) => res.json()),
    fetch(requests.fetchComedyTv).then((res) => res.json()),
    fetch(requests.fetchDramaTv).then((res) => res.json()),
    fetch(requests.fetchOnTheAirTv).then((res) => res.json()),

  ]);
  


  return (
    <>
      <section className="relative flex h-screen flex-col pt-32 justify-between">
      <Preview billboard={trendingNow?.results[Math.floor(Math.random() * trendingNow?.results.length)]}/>
      </section>
      <section className="-mt-36">
        <MovieRow title="Trends" movies={trendingNow?.results} />
        <MovieRow title="Top 10 " movies={topShows?.results} />
        <MovieRow title="Comedies" movies={comedyShows?.results} />
        <MovieRow title="Dramas" movies={dramaShows?.results} />
        <MovieRow title="On Air" movies={onAir?.results} />
      </section>
      <Modal/>
    </>   
  )
}
