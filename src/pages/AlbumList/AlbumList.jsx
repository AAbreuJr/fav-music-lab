import React from 'react'
import './AlbumList.css';
import AlbumCard from '../../components/AlbumCard/AlbumCard';


const AlbumList = (props) => {
  return ( 
    <>
      <div className='AlbumList-grid'>
        {props.albums.map(album =>
          <AlbumCard 
              key={album._id}
              album={album}
              handleDeleteAlbum={props.handleDeleteAlbum}
              user={props.user}
          />
        )}
      </div>
    </>
   );
}
 
export default AlbumList;