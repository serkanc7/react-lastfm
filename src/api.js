import axios from "axios";

const api_key = "a8a7d8a9db76c29bfce86e579e99fa33";

export const fetchTopArtists = async ({ pageParam = 1 }) => {
  const { data } = await axios.get(
    `http://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=${api_key}&format=json&page=${pageParam}`
  );
  return data;
};

export const fetchTopAlbums = async (artist) => {
  const { data } = await axios.get(
    `https://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=${artist}&api_key=${api_key}&format=json`
  );
  return data;
};

export const fetchTopTracks = async (artist) => {
  const { data } = await axios.get(
    `http://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks&artist=${artist}&api_key=${api_key}&format=json`
  );
  return data;
};
