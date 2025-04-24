import axios from "axios";

export const createSinger = async (data: any) => {
  const res = await axios.post("http://localhost:3000/singer", data);
  return res.data;
};

export const createPlaylist = async (data: any) => {
  const res = await axios.post("http://localhost:3000/playlist", data);
  return res.data;
};

export const createSong = async (data: any) => {
  const res = await axios.post("http://localhost:3000/song", data);
  return res.data;
};

export const getSingers = async ():Promise<any[]> => {
  const res = await axios.get("http://localhost:3000/singer");
  return res.data.data;
};

export const getPlaylists = async ():Promise<any[]> => {
  const res = await axios.get("http://localhost:3000/playlist");
  return res.data.data;
};
