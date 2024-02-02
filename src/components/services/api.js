import axios from 'axios';

const URL = 'https://api.themoviedb.org/3/';
const API_KEY = '32341dbd589795538eacfb126ee51fa5'

export const requestTrendMovies = async () => {
  const { data } = await axios.get(`${URL}trending/all/day?language=en-US&api_key=${API_KEY}`);
  return data.results;
};

export const requestMoviesByName = async (value) => {
  const { data } = await axios.get(`${URL}search/movie?query=${value}&language=en-US&api_key=${API_KEY}`);
  console.log(data.results);
  return data.results;
};

export const requestMoviesDetails = async (id) => {
  const { data } = await axios.get(`${URL}movie/${id}?language=en-US&api_key=${API_KEY}`);
  return data;
};

export const requestCast = async (id) => {
  const { data } = await axios.get(`${URL}movie/${id}/credits?language=en-U&api_key=${API_KEY}`);
  return data;
};

export const requestReviews = async (id) => {
  const { data } = await axios.get(`${URL}movie/${id}/reviews?language=en-US&page=1&api_key=${API_KEY}`);
  return data;
};