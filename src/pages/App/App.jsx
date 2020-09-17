import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
import Signup from "../Signup/Signup";
import Login from "../Login/Login";
import authService from "../../services/authService";
import Users from "../Users/Users";
import "./App.css";
import * as albumAPI from '../../services/albums-api'

class App extends Component {
  state = {
    albums: [],
    user: authService.getUser()
  }

  handleLogout = () => {
    authService.logout();
    this.setState({ user: null });
  };

  handleSignupOrLogin = () => {
    this.setState({ user: authService.getUser() });
  };


  handleAddAlbum = async newAlbumData => {
    const newAlbum = await albumAPI.create(newAlbumData);
    newAlbum.addedBy = {name: this.state.user.name, _id: this.state.user._id }
    this.setState(state => ({
      albums: [...state.albums, newAlbum]
    }), () => this.props.history.push('/albums')) 
  }
  
  handleUpdateAlbum = async updatedAlbumData => {
    const updatedAlbum = await albumAPI.update(updatedAlbumData);
    const newAlbumsArray = this.setState.albums.map(a => 
      a._id === updatedAlbum._id ? updatedAlbum : a
      );
      this.setState(
        {albums: newAlbumsArray}, 
        () => this.props.history.push('/albums')
      ) 
  }

  handleDeleteAlbum = async id => {
    if(authService.getUser()) {
      await albumAPI.deleteOne(id);
      this.setState(state => ({
        albums: state.albums.filter(a => a._id !== id)
      }), () => this.props.history.push('/albums'))
    } else {
      this.props.history.push('/login')
    }
  }

  async componentDidMount() {
    const albums =await albumAPI.getAll()
    this.setState({albums})
  }

  render() {
    const {user} = this.state
    return (
      <>
        <NavBar
         user={this.state.user}
          handleLogout={this.handleLogout} 
          />

        <Route exact path='/' render={() =>
          <Landing />
        } />

        <Route
          exact
          path="/signup"
          render={({ history }) => (
            <Signup
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}
            />
          )}
        />

        <Route
          exact
          path="/login"
          render={({ history }) => (
            <Login
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}
            />
          )}
        />
        
        <Route
          exact path='/albums/add'
          render={() =>
            authService.getUser() ?
              <AddAlbum
                handleAddAlbum={this.handleAddAlbum}
                user={this.state.user}
              />
              :
              <Redirect to='/login' />
          } />

        <Route
          exact path="/albums" render={() =>
            <AlbumList
              albums={this.state.albums}
              user={this.state.user}
              handleDeleteMovie={this.handleDeleteAlbums}
            />}
        />

        <Route
          exact path='/edit' render={({ location }) =>
            authService.getUser() ?
              <EditAlbum
                handleUpdateAlbum={this.handleUpdateAlbum}
                location={location}
                user={this.state.user}
              />
              :
              <Redirect to='/login' />
          } />
        

        <Route
          exact
          path="/users"
          render={() => (user ? <Users /> : <Redirect to="/login" />)}
        />
      </>
    );
  }
}

export default App;
