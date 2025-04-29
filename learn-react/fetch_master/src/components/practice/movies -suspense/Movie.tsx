import MovieHeader from "./MovieHeader";
// import MovieList from "./MovieList";
import MovieMain from "./MovieMain";
import { movieInstance } from "../../../api/axiosInstance";
import { Suspense } from "react";
import MovieList from "./MovieList";
import MovieLoader from "../movies/MovieLoader";
import { ErrorBoundary } from "react-error-boundary";

const fetchMovie = async (url: string) => {
  await new Promise((resolve) =>
    setTimeout(
      resolve,
      [3000, 4000, 5000, 6000, 7000][Math.floor(Math.random() * 5)]
    )
  );
  const result = await movieInstance.get(url);
  return result.data.results;
};

// 리액트 19 use 훅 -> 비동기를 동기처럼 도와주는 훅
// ErrorBoundary -> 랜더링 중에 발생하는 오류를 핸들링하기 위해서 사용하는 패턴
// 전통적으로 클래스 컴포넌트로 작성되어야 한다.
export default function Movie() {
  // async를 못하니까
  // const fetchPromise = fetchMovie("/movie/now_playing");
  // console.log(fetchPromise);

  return (
    <>
      {/* {JSON.stringify(nowPlaying)} */}
      <MovieHeader />
      <MovieMain />

      {/* 서스팬스 - UI가 로딩이 걸리면 그때 보여주는 처리를 할 수 있게 해줌*/}
      <ErrorBoundary fallback={<MovieLoader title="now_playing" />}>
        <Suspense fallback={<MovieLoader title="now_playing" />}>
          <MovieList
            fetchPromise={fetchMovie("/movie/now_playing")}
            title="Now Playing"
          />
        </Suspense>
      </ErrorBoundary>

      <ErrorBoundary fallback={<MovieLoader title="Upcomming" />}>
        <Suspense fallback={<MovieLoader title="Upcomming" />}>
          <MovieList
            fetchPromise={fetchMovie("/movie/now_playing")}
            title="Upcomming"
          />
        </Suspense>
      </ErrorBoundary>

      <ErrorBoundary fallback={<MovieLoader title="Popular" />}>
        <Suspense fallback={<MovieLoader title="Popular" />}>
          <MovieList
            fetchPromise={fetchMovie("/movie/now_playing")}
            title="Popular"
          />
        </Suspense>
      </ErrorBoundary>

      {/* <MovieList movies={nowPlaying} title="Now Playing" /> */}
      {/* <MovieList movies={upcoming} title="Upcoming" />
      <MovieList movies={popular} title="Popular" /> */}
    </>
  );
}
