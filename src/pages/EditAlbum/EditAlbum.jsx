import React, { Component } from 'react';
import './EditAlbum.css'
import { Link } from 'react-router-dom';

class EditAlbum extends Component {
    state = {
        invalidForm: false,
        formData: this.props.location.state.album,
    };

formRef = React.createRef();

handleSubmit = e => {
    e.preventDefault();
    this.props.handleUpdateAlbum(this.state.formData);
  };

handleChange = e => {
    const formData = {...this.state.formData, [e.target.name]: e.target.value};
    this.setState({
    formData,
    invalidForm: !this.formRef.current.checkValidity()
    });
};


render() {
    return (
        <>
            <div className="EditAlbum">
                <form className="col s12" ref={this.formRef} onSubmit={this.handleSubmit}>
                    <div className="row">
                        <div className="input-field col s12">
                        <input name="name" id="album_name" type="text" className="active" value={this.state.formData.name} onChange={this.handleChange} required />
                        <label className="active" htmlFor="album_name">Album Name</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                        <input name="artist" id="artist" type="text" className="active" value={this.state.formData.cast.join(', ')} onChange={this.handleChange} required/>
                        <label className="active" htmlFor="artist">Artist (Separate with commas)</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                        <input name="description" id="description" type="text" className="active" value={this.state.formData.description} onChange={this.handleChange}/>
                        <label className="active" htmlFor="description">Album</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                        <input name="releaseYear" id="release" type="text" className="active" value={this.state.formData.releaseDate} onChange={this.handleChange}/>
                        <label className="active" htmlFor="release">Release Year</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                        <input name="genre" id="genre" type="text" className="active" value={this.state.formData.genre} onChange={this.handleChange}/>
                        <label className="active"htmlFor="genre">Genre</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                        <input name="image" id="imageURL" type="text" className="active" value={this.state.formData.image} onChange={this.handleChange}/>
                        <label className="active" htmlFor="imageURL">Image URL</label>
                        </div>
                    </div>
                    <button
                        type="submit"
                        className="btn green"
                        disabled={this.state.invalidForm}
                    ><i className="material-icons left">edit</i>
                        Update Album
                    </button>
                    <Link 
                        className="btn red"
                        to={{
                            pathname: '/albums'
                        }}
                    ><i className="material-icons left">undo</i>
                    Cancel
                    </Link>                            
                </form>
            </div>
        </>
    )
}
}

export default EditAlbum;