import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class EditSong extends Component {
  state = {
      invalidForm: false,
      formData: this.props.location.state.song
  };

  formRef = React.createRef();

  handleSubmit = e => {
      e.preventDefault();
      this.props.handleUpdateSong(this.state.formData);
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
              <div className="row">
                  <form className="col s12" ref={this.formRef} onSubmit={this.handleSubmit}>
                      <div className="row">
                          <div className="input-field col s6">
                          <input name="name" id="name" type="text" className="active" value={this.state.formData.name} onChange={this.handleChange} required />
                          <label className="active" htmlFor="name">Song Name</label>
                          </div>
                      </div>
                      <div className="row">
                          <div className="input-field col s6">
                          <input name="artist" id="artist" type="text" className="active" value={this.state.formData.artist.join(', ')} onChange={this.handleChange} required/>
                          <label className="active" htmlFor="cast">Artist (Separate with commas)</label>
                          </div>
                      </div>
                      <div className="row">
                          <div className="input-field col s6">
                          <input name="releaseDate" id="release" type="text" className="active" value={this.state.formData.releaseDate} onChange={this.handleChange}/>
                          <label className="active" htmlFor="release">Release Year</label>
                          </div>
                          </div>
                      <div className="row">
                          <div className="input-field col s6">
                          <input name="image" id="imageURL" type="text" className="active" value={this.state.formData.image} onChange={this.handleChange}/>
                          <label className="active" htmlFor="imageURL">Image URL</label>
                          </div>
                      </div>
                      <button
                          type="submit"
                          className="btn green"
                          disabled={this.state.invalidForm}
                      ><i className="material-icons left">edit</i>
                          Update Song
                      </button>
                      <Link 
                          className="btn red"
                          to={{
                              pathname: '/songs'
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

export default EditSong;