import React, { Component } from 'react'
import './AddAlbum.css';

class AddAlbum extends Component {
    state = { 
        invalidForm: true,
        formData: {
            name: '',
            artist: [],
            producer: '',
            releaseYear: '',
            runtime: '',
            genre: '',
            image: '',
        }
     }

     handleSubmit = e =>{
         e.preventDefault();
         this.props.handleAddAlbum(this.state.formData)
     }

     handleChange = e => {
        const formData = {...this.state.formData, [e.target.name]: e.target.value};
        this.setState({
        formData,
        invalidForm: !this.formRef.current.checkValidity()
        });
     }

    formRef = React.createRef()
    render() { 
        return ( 
            <>
                <div className="AddAlbum">
                    <form className="col s12" ref={this.formRef} onSubmit={this.handleSubmit}>
                        <div className="row">
                            <div className="input-field col s12">
                            <input name="name" id="album_name" type="text" className="active" value={this.state.formData.name} onChange={this.handleChange} required />
                            <label htmlFor="album_name">Album Name</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                            <input name="artist" id="artist" type="text" className="active" value={this.state.formData.cast} onChange={this.handleChange} required/>
                            <label htmlFor="artist">Artist (Separate with commas)</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                            <input name="releaseYear" id="release" type="text" className="active" value={this.state.formData.releaseYear} onChange={this.handleChange}/>
                            <label htmlFor="release">Release Year</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                            <input name="genre" id="genre" type="text" className="active" value={this.state.formData.genre} onChange={this.handleChange}/>
                            <label htmlFor="genre">Genre</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                            <input name="image" id="imageURL" type="text" className="active" value={this.state.formData.image} onChange={this.handleChange}/>
                            <label htmlFor="imageURL">Image URL</label>
                            </div>
                        </div>
                        <button
                            type="submit"
                            className="btn red"
                            disabled={this.state.invalidForm}
                        ><i className="material-icons left">add</i>
                            Add Album
                        </button>                           
                    </form>
                </div>
            </>
         );
    }
}
 
export default AddAlbum;