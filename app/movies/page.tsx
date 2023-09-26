import Modal from "@/components/Modal";
import MovieRow from "@/components/MovieRow";
import Preview from "@/components/Preview";
import requests from "@/utils/requests";



export default async function Movies() {
  const [
    horrorMovies,
    trendingNow,
    documentaries,
    actionMovies,
    comedyMovies,
    romanceMovies,
  ] = await Promise.all([
    fetch(requests.fetchHorrorMovies).then((res) => res.json()),
    fetch(requests.fetchTrending).then((res) => res.json()),
    fetch(requests.fetchDocumentaries).then((res) => res.json()),
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
        <MovieRow title="Documentaries" movies={documentaries?.results} />
        <MovieRow title="Horrors" movies={horrorMovies?.results} />
        <MovieRow title="Actions" movies={actionMovies?.results} />
        <MovieRow title="Comedies" movies={comedyMovies?.results} />
        <MovieRow title="Romances" movies={romanceMovies?.results} />
      </section>
      <Modal/>
    </>   
  )
}
