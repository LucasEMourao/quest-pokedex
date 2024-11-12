import axios from "axios";

const fetchAxios = axios.create({
  baseURL: `https://pokeapi.co/api/v2/`,
});

export default fetchAxios;
