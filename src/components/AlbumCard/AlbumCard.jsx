import React from 'react';
import { Link } from 'react-router-dom';

function MovieCard({ user, album, handleDeleteAlbum }) {
    return (
        <>
            <div className="card">
                <div className="card-image waves-effect waves-block waves-light">
                    <img alt="album" className="activator" src={album.image ? album.image : "https://www.cebodtelecom.com/wp-content/uploads/2014/09/related_post_no_available_image.png"} onClick={()=> {}}/>
                </div>
                <div className="card-content">
                    <span className="card-title activator grey-text text-darken-4">{album.name}<i className="material-icons right">more_vert</i></span>
                    <p>{album.description}</p>
                </div>
                <div className="card-reveal">
                    <span className="card-title grey-text text-darken-4">{album.name}<i className="material-icons right">close</i></span>
                    <h6>Added By:  {album.addedBy.name}</h6>
                    <div>Genre:  {album.genre}</div>
                    <div>Release Year:  {album.releaseYear}</div>
                    <div>Artist: {album.cast.join(', ')}</div>
                    <div>Producer:  {album.producer}</div>
                    <p>{movie.description}</p>
                    {user && (user._id === album.addedBy._id) &&
                        <>
                            <button type="submit" className="btn red" onClick={() => handleDeleteMovie(album._id)}>
                          <i className="material-icons left">delete</i>    
                                Delete Album
                            </button>
                            <Link 
                                className="btn yellow black-text"
                                to={{
                                    pathname: '/edit',
                                    state: {movie}
                                }}
                            ><i className="material-icons left">build</i>
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