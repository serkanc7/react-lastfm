import React from "react";
import { useQuery } from "react-query";
import { useSelector } from "react-redux";
import { fetchTopAlbums } from "../../api";
import MusicCard from "../MusicCard/MusicCard";
import "./TopAlbums.scss";

const TopAlbums = ({ id }) => {
  const theme = useSelector((state) => state.theme.mode);

  const { isLoading, error, data } = useQuery(["topAlbums", id], () =>
    fetchTopAlbums(id)
  );

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
    <div className="top-albums">
      <h2>Top Albums</h2>
      {data.topalbums.album.map((cardData) => (
        <MusicCard
          cardData={cardData}
          key={cardData.name}
          cardState="album"
          theme={theme}
        />
      ))}
    </div>
  );
};

export default TopAlbums;
