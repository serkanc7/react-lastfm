import React from 'react'
import './ArtistCard.scss';

const Card = ({artist, theme}) => {

  return (
    <div className={`artist-card ${theme}`}>
        <img src={artist.image[2]["#text"]} alt="" />
        <div className='artist-card__mid'>
          <div className={`artist-card__name-title ${theme}`}>Artist</div>
          <div className='artist-card__name'>{artist.name}</div>
        </div>
        <div className='artist-card__stats'>
          <div className='artist-card__listeners'>listeners: {artist.listeners}</div>
          <div>playcount: {artist.playcount}</div>
        </div>
    </div>
  )
}

export default Card