import React from 'react'
import './ArtistCard.scss';

const Card = ({artist, theme}) => {

  return (
    <div className={`artist-card ${theme}`}>
        <img src={artist.image[2]["#text"]} alt="" />
        <div>
          <div>Artist</div>
          <hr />
          <div>{artist.name}</div>
        </div>
        <div>
          <div>listeners: {artist.listeners}</div>
          <div>playcount: {artist.playcount}</div>
        </div>
    </div>
  )
}

export default Card