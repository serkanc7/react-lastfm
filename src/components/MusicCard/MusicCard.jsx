import React from 'react'
import './MusicCard.scss';

const MusicCard = ({cardData,cardState,theme}) => {

  return (
    <div className={`music-card ${theme}`}>
        <img className='music-card__img' src={cardData.image[2]["#text"]} alt="" />
        <div >
            <div className='music-card__name'>{cardData.name}</div>
            <div className='music-card__artist'>{cardData.artist.name}</div>
        </div>
        <div>
            <div>{cardData.playcount} play</div>
            {cardState === 'track' && <div>{cardData.listeners} listeners</div>}
        </div>
    </div>
  )
}

export default MusicCard