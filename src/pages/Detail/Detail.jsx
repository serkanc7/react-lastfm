import React from 'react'
import TopAlbums from '../../components/TopAlbums/TopAlbums'
import TopTracks from '../../components/TopTracks/TopTracks'
import './Detail.scss';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Detail = () => {

   const { id } = useParams(); 

   const theme = useSelector((state) => state.theme.mode);

  return (
    <div className='detail'>
        <div className={`detail__card ${theme}`}>
          <img className='detail__img' src="https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png" alt="" />
          <h1 className='detail__title'>{id}</h1>
        </div>
        <div className='detail__top-info'>
            <TopAlbums id={id}/>
            <TopTracks id={id}/>
        </div>
    </div>
  )
}

export default Detail