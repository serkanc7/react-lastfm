import React from 'react'
import { useInfiniteQuery } from 'react-query'
import ArtistCard from '../../components/ArtistCard/ArtistCard'
import {fetchTopArtists} from '../../api';
import './Home.scss';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Home = () => {

  const theme = useSelector((state) => state.theme.mode);

  const { 
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status,
   } = useInfiniteQuery('topArtists', fetchTopArtists, {
    getNextPageParam: (lastGroup, allGroups) => {
      return allGroups.length + 1;
    },
   });

  if (status === "loading") return 'Loading...'

  if (status === "error") return 'An error has occurred: ' + error.message

  return (
    <div className='home'>
      <h1>Top Artists</h1>


      {data.pages.map((group, i) => (
         <React.Fragment key={i}>
           {group.artists.artist.map((artist,index) => (
            <Link to={`detail/${artist.name}`} key={index} className={`home__link`}>
              <ArtistCard artist={artist} theme={theme}/>
            </Link>
           ))}
         </React.Fragment>
       ))}
      
       <div>
         <button
           onClick={() => fetchNextPage()}
           disabled={!hasNextPage || isFetchingNextPage}
         >
           {isFetchingNextPage
             ? 'Loading more...'
             : hasNextPage
             ? 'Load More'
             : 'Nothing more to load'}
         </button>
       </div>
       <div>{isFetching && !isFetchingNextPage ? 'Fetching...' : null}</div>
    </div>
  )
}

export default Home