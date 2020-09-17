import React from 'react';
import SongCard from '../../components/SongCard/SongCard'

import './SongList.css';

function SongList(props) {
    return (
        <>
            <div className='SongList-grid'>
                {props.songs.map(song =>
                    <SongCard 
                        key={song._id}
                        song={song}
                        user={props.user}
                        handleDeleteSong={props.handleDeleteSong}
                    />
                )}
            </div>
        </>
    );

}

export default SongList;