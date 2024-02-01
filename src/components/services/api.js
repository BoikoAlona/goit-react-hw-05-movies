import axios from 'axios';

const URL = 'https://api.themoviedb.org/3/';
const API_KEY = '32341dbd589795538eacfb126ee51fa5'

export const requestTrendMovies = async () => {
  const { data } = await axios.get(`${URL}trending/all/day?language=en-US&api_key=${API_KEY}`);
  return data;
};

export const requestMoviesByName = async () => {
  const { data } = await axios.get(`${URL}search/movie?include_adult=false&language=en-US&page=1&api_key=${API_KEY}`);
  return data;
};

export const requestMoviesDetails = async () => {
  const { data } = await axios.get(`${URL}movie/movie_id?language=en-US&api_key=${API_KEY}`);
  return data;
};

export const requestCredits = async () => {
  const { data } = await axios.get(`${URL}movie/movie_id/credits?language=en-U&api_key=${API_KEY}`);
  return data;
};

export const requestReviews = async () => {
  const { data } = await axios.get(`${URL}movie/movie_id/reviews?language=en-US&page=1&api_key=${API_KEY}`);
  return data;
};