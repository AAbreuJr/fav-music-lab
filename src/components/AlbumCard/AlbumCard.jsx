import React from 'react';
import { Link } from 'react-router-dom';

function AlbumCard({ user, album, handleDeleteAlbum }) {
    return (
        <>
            <div className="card">
                <div className="card-image waves-effect waves-block waves-light">
                    <img alt="album" className="activator" src={album.image ? album.image : "https://www.cebodtelecom.com/wp-content/uploads/2014/09/related_post_no_available_image.png"} onClick={()=> {}}/>
                </div>
                <div className="card-content">
                    <span className="card-title activator grey-text text-darken-4">{album.name}</span>
                    <p>{album.description}</p>
                </div>
                <div className="card-reveal">
                    <h6>Added By:  {album.addedBy.name}</h6>
                    <div>Genre:  {album.genre}</div>
                    <div>Release Year:  {album.releaseYear}</div>
                    <div>Artist: {album.artist.join(', ')}</div>
                    <div>Producer:  {album.producer}</div>
                    {user && (user._id === album.addedBy._id) &&
                        <>
                            <button type="submit" className="btn red" onClick={() => handleDeleteAlbum(album._id)}>  
                                Delete Album
                            </button>
                            <Link 
                                className="btn yellow black-text"
                                to={{
                                    pathname: '/albums',
                                    state: {album}
                                }}>
                                Edit Album
                            </Link>
                        </>
                        }
                </div>
            </div>
        </>
    )
}

export default AlbumCard;