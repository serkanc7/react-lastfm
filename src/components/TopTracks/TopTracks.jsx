import React from 'react'
import { useQuery } from 'react-query'
import { useSelector } from 'react-redux'
import { fetchTopTracks } from '../../api'
import MusicCard from '../MusicCard/MusicCard'
import './TopTracks.scss'

const TopTracks = ({id}) => {
  const theme = useSelector((state) => state.theme.mode);

    const { isLoading, error, data } = useQuery(["topTracks", id], () => fetchTopTracks(id))

    if (isLoading) return 'Loading...'
  
    if (error) return 'An error has occurred: ' + error.message

  return (
    <div className='top-tracks'>
        <h2>Top Tracks</h2>
        {data.toptracks.track.map((cardData) => <MusicCard cardData={cardData} key={cardData.name} cardState="track" theme={theme}/>)}
    </div>
  )
}

export default TopTracks