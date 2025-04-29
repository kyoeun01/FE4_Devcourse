import axios from "axios";

// 고정적으로 들어가는 도메인
export const axiosInstance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/posts",
});

export const axiosLocalInstance = axios.create({
  baseURL: "http://localhost:3001",
});

export const movieInstance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMWVlYmVhOWM4MTYyNjM4MzI5MzllNGI4YzdmYWQzMiIsIm5iZiI6MTc0NTQ2MzEyMC4zNTIsInN1YiI6IjY4MDlhNzUwZTkyZjk0MGNhNjljZjE3MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.EoJSBWlO8lQ5xwD82z3ckiNb8pTDM2F9TzV9b-hgz9A",
  },
});
