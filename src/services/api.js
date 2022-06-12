import axios from 'axios';
const BASE_URL = 'https://api.themoviedb.org/3/trending/movie/day';
const API_KEY = '94f703750c3e0771d8c2babc592efc94';

export const getMovies = page =>
  axios.get(BASE_URL + `?page=${page}&api_key=${API_KEY}`);
