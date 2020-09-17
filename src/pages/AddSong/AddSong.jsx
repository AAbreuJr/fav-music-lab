import React, { Component } from 'react';
import SongCard from '../../components/SongCard/SongCard'

import './AddSong.css';

class AddSong extends Component {
	state = {
		invalidForm: true,
        formData: {
            title: '',
            artist: [],
            releaseDate: '',
		}
	}

	formRef = React.createRef();

	handleSubmit = e => {
		e.preventDefault();
		this.props.handleAddSong(this.state.formData);
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
                <div className="AddSong">
                    <form className="col s12" ref={this.formRef} onSubmit={this.handleSubmit}>
                        <div className="row">
                            <div className="input-field col s12">
                            <input name="title" id="title" type="text" className="active" value={this.state.formData.name} onChange={this.handleChange} required />
                            <label htmlFor="title">Song Title</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                            <input name="artist" id="artist" type="text" className="active" value={this.state.formData.cast} onChange={this.handleChange} required/>
                            <label htmlFor="artist">Artist</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                            <input name="releaseDate" id="release" type="text" className="active" value={this.state.formData.releaseDate} onChange={this.handleChange}/>
                            <label htmlFor="release">Release Year</label>
                            </div>
                        </div>
                        <button
                            type="submit"
                            className="btn red"
                            disabled={this.state.invalidForm}
                        ><i className="material-icons left">add</i>
                            Add Song
                        </button>                           
                    </form>
                </div>
            </>
		)
	}
}

export default AddSong;