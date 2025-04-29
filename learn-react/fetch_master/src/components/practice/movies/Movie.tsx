import { useEffect, useState } from "react";
import MovieHeader from "./MovieHeader";
import MovieList from "./MovieList";
import MovieMain from "./MovieMain";
import { movieInstance } from "../../../api/axiosInstance";

export default function Movie() {
  const [nowPlaying, setNowPlaying] = useState<MovieType[]>([]);
  const [upcoming, setUpComming] = useState<MovieType[]>([]);
  const [popular, setPopular] = useState<MovieType[]>([]);

  const fetchNowplaying = async () => {
    const result = await movieInstance.get("/movie/now_playing");
    setNowPlaying(result.data.results);
  };

  const fetchUpComming = async () => {
    const result = await movieInstance.get("/movie/now_playing");
    setUpComming(result.data.results);
  };

  const fetchPopular = async () => {
    const result = await movieInstance.get("/movie/popular");
    setPopular(result.data.results);
  };

  useEffect(() => {
    fetchNowplaying();
    fetchUpComming();
    fetchPopular();
  }, []);

  return (
    <>
      {/* {JSON.stringify(nowPlaying)} */}
      <MovieHeader />
      <MovieMain />

      <MovieList movies={nowPlaying} title="Now Playing" />
      <MovieList movies={upcoming} title="Upcoming" />
      <MovieList movies={popular} title="Popular" />
    </>
  );
}
