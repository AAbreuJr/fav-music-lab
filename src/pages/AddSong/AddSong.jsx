import React, { Component } from 'react';
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
                            <input name="name" id="name" type="text" className="active" value={this.state.formData.name} onChange={this.handleChange} required />
                            <label htmlFor="name">Song Name</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                            <input name="artist" id="artist" type="text" className="active" value={this.state.formData.artist} onChange={this.handleChange} required/>
                            <label htmlFor="artist">Artist</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                            <input name="releaseDate" id="release" type="text" className="active" value={this.state.formData.releaseDate} onChange={this.handleChange}/>
                            <label htmlFor="release">Release Date</label>
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
                            disabled={this.state.invalidForm}>
                            Add Song
                        </button>                           
                    </form>
                </div>
            </>
		)
	}
}

export default AddSong;