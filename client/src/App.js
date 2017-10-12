import React, { Component } from 'react';
import { Route, Switch, Link } from "react-router-dom";
import './App.css';
import Images from './components/Images';
// import dropzone to drop images or files on the website.
import Dropzone from 'react-dropzone';
// to hash the string just do sha(message)
//to generate a long string for security. encription
import sha1 from 'sha1';
import axios from 'axios';
// components
import Navbar from './components/Navbar';
import Login from './components/Login';
import Register from './components/Register';
import AddItem from './components/AddItem';
import ShowItems from './components/ShowItems';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
        images: [],
        username: '',
        password: '',
        email: '',
        uploadedImage: null,
        imageUrl: "",
        user: {}, // this object contains email and username
        // database: [],
        data: [],
        isAuthenticated: false
        // item: {
        //   image: '',
        //   name: '',
        //   description: '',
        //   expiration: new Date(),
        //   price: 4.50
        // }
    }
  this.uploadFile = this.uploadFile.bind(this);// send this to Dropzone
  this.handleUserNameInput = this.handleUserNameInput.bind(this);// send this to Login
  this.handlePasswordInput = this.handlePasswordInput.bind(this);//send this to Login
  this.handleEmailInput = this.handleEmailInput.bind(this);
  this.handleChange = this.handleChange.bind(this);
  this.callingDB = this.callingDB.bind(this);
  this.userRegistration= this.userRegistration.bind(this);
  this.userLogin = this.userLogin.bind(this);
  this.handleItemDelete = this.handleItemDelete.bind(this);
  }


  componentDidMount() {
    axios("http://localhost:3001/api/items")
    .then(res => {
      console.log(res.data.data.items);
      this.setState({
        data: res.data.data.items
      });
    });
  }

   uploadFile(e){
    e.preventDefault();
    const url = 'https://api.cloudinary.com/v1_1/kumrabytes/upload';
    const preset = 'dabm2v1z';

    let file = this.state.uploadedImage;

    let formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', preset);
    console.log(formData)
    axios({
        url,
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        data: formData
    }).then((res)=> {
      console.log('this is the response object',res);
      this.setState({
        imageUrl: res.data.secure_url
      })
      this.sendToTheDatabase(this.state.imageUrl)
    }).catch(err => console.error(err))
  }

  sendToTheDatabase(link){
  console.log("inside sendtodatabase", link);
  // const url = 'http://localhost:3001/api/items';
  let data = {
    url: link,
    name: 'curry',
    description: 'home made',
    expiration: new Date(),
    price: 4.50,
    user_id:12
  }
    axios({
        url: 'http://localhost:3001/api/items',
        method: 'POST',
        data: data
        // headers: 'Access-Control-Allow-Origin'
    }).then((res)=> {
        console.log(res);
    }).catch(err => {
      console.log("we got an error")
      console.error(err)
      })
  }


  callingDB() {
    axios({
      method: "GET",
      url: `http://localhost:3001/api/items/`
    })
      .then(res => {
        console.log(res);
        this.setState({
          dataBase: res.data.data.items,
        });
      })
      .catch(err => console.error(err));
  }

  handleChange(e){
    console.log("--------------whats")
    if (e.currentTarget.files.length === 1) {
      const fReader = new FileReader();
      console.log(fReader)
      fReader.addEventListener(
        'load',
        () => {
          this.setState({  uploadedImage: fReader.result });
        },
        false
      );
      if (e.currentTarget.files['0']) {
        // reading file
        fReader.readAsDataURL(e.currentTarget.files['0']);
      }
      return;
    }
  }

userRegistration(e){
  e.preventDefault();

  let data ={
    username: this.state.username,
    email: this.state.email,
    password: this.state.password
  }

 axios({
      url: 'http://localhost:3001/auth/register',
      method: 'POST',
      data
    }).then((res)=> {
        this.setState({ user: res.data.user, isAuthenticated: true })
    }).catch(err => {
      console.error(err)
      })
}

userLogin(e){
  e.preventDefault();
// define this to login users in the backend
  let data ={
    username: this.state.username,
    password: this.state.password
  }

 axios({
      url: 'http://localhost:3001/auth/login',
      method: 'POST',
      data
    }).then((res)=> {
      //console.log(res)
        this.setState({ user: res.data.user, isAuthenticated: true })
    }).catch(err => {
      console.error(err)
      })
}


  handleUserNameInput(event) {
    event.preventDefault();
    this.setState({
      username: event.target.value
    });
    // console.log(event.target.value);
  }

  handlePasswordInput(event) {
    event.preventDefault();
    this.setState({
      password: event.target.value
    });
    // console.log(event.target.value);
  }

  handleEmailInput(event) {
    event.preventDefault();
    this.setState({
      email: event.target.value
    });
    // console.log(event.target.value);
  }

  handleItemDelete(event) {
    console.log('del', event);
    axios({
      method: "delete",
      url: `http://localhost:3001/api/items`,
      data: event
    })
      .then(res => {
        this.callingDB();
        console.log("DELETE Request SENT");
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">FoodShare</h1>
          <p>A food sharing app to prevent the food wastage</p>
          <Navbar isAuthenticated={this.state.isAuthenticated} />
        </header>
        <AddItem
          uploadFile = {this.uploadFile}
          uploadedImage = {this.state.uploadedImage}
          handleChange = {this.handleChange}
          sendToTheDatabase = {this.sendToTheDatabase}
        />
        {/* To show the items on the page */}
        <ShowItems data={ this.state.data } />
        <Switch>
          <Route exact path="/login"
            render ={props=>(
              <Login
                handleUserNameInput={this.handleUserNameInput}
                handlePasswordInput={this.handlePasswordInput}
                userLogin={this.userLogin}
              />
            )}
          />{/* Login router ends here */}
          <Route exact path="/register"
            render ={props=>(
              <Register
                handleUserNameInput={this.handleUserNameInput}
                handlePasswordInput={this.handlePasswordInput}
                handleEmailInput={this.handleEmailInput}
                userRegistration={this.userRegistration}
              />
            )}
          />{/* Register router ends here */}
        </Switch>
      </div>
    );
  }
}

export default App;

// this.state.user.id || add this line later
