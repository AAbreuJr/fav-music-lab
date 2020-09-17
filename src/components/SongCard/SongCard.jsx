import React from 'react';
import { Link } from 'react-router-dom';

function SongCard({ user, song, handleDeleteSong }) {
    return(
        <>
        <div className=" card">
            <div className="card-image waves-effect waves-block waves-light">
                <img alt="tvshow" className="activator" src={song.image ? song.image : "https://www.cebodtelecom.com/wp-content/uploads/2014/09/related_post_no_available_image.png"} onClick={()=> {}}/>
            </div>
            <div className="card-content">
                <span className="card-title activator grey-text text-darken-4">{song.name}</span>
                <p>{song.artist}</p>
            </div>
            <div className="card-reveal">
                <span className="card-title grey-text text-darken-4">{song.name}</span>
                <h6>Added By:  {song.addedBy.name}</h6>
                <h6>Artist: {song.artist}</h6>
                <div>Release Year:  {song.releaseDate}</div>
                {user && (user._id === song.addedBy._id) &&
                    <>
                        <button type="submit" className="btn red" onClick={() => handleDeleteSong(song._id)}>  
                            Delete Song
                        </button>
                        <Link 
                            className="btn yellow black-text"
                            to={{
                                pathname: '/editSong',
                                state: {song}
                            }}>
                            Edit Song
                        </Link>
                    </>
                }
            </div>
        </div>
    </>
    ) 
}

export default SongCard;