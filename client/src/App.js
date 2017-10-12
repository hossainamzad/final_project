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
        user: null,
        database: [],
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
  this.handleChange = this.handleChange.bind(this);
  this.callingDB = this.callingDB.bind(this);
  this.userRegistration= this.userRegistration.bind(this);
  }


   componentDidMount(){
     if (this.state.imageUrl) {
      this.sendToTheDatabase(this.state.imageUrl);
     }
     //should call the database as soon as the page loads.
     this.callingDB();
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
  let userData={
    username: this.state.username,
    email: this.state.email,
    password: this.state.password
  }
 axios({
        url: 'http://localhost:3001/api/users',
        method: 'POST',
        data: userData
        // headers: 'Access-Control-Allow-Origin'
    }).then((res)=> {
        console.log(res);
    }).catch(err => {
      console.error(err)
      })
}
  handleUserNameInput(event) {
    event.preventDefault();
    this.setState({
      username: event.target.value
    });
    console.log(event.target.value);
  }

  handlePasswordInput(event) {
    event.preventDefault();
    this.setState({
      password: event.target.value
    });
    console.log(event.target.value);
  }

  handleEmailInput(event) {
    event.preventDefault();
    this.setState({
      email: event.target.value
    });
    console.log(event.target.value);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">FoodShare</h1>
          <p>A food sharing app to prevent the food wastage</p>
          <Navbar />
        </header>
        <AddItem
          uploadFile = {this.uploadFile}
          uploadedImage = {this.state.uploadedImage}
          handleChange = {this.handleChange}
          sendToTheDatabase = {this.sendToTheDatabase}
        />
        <Switch>
          <Route exact path="/login"
            render ={props=>(
              <Login
                username={this.state.username}
                password={this.state.password}
                handleUserNameInput={this.handleUserNameInput}
                handlePasswordInput={this.handlePasswordInput}
                handleEmailInput={this.handleEmailInput}
              />
            )}
          />{/* Login router ends here */}
          <Route exact path="/register"
            render ={props=>(
              <Register
                username={this.state.username}
                email={this.state.email}
                password={this.state.password}
                handleUserNameInput={this.handleUserNameInput}
                handlePasswordInput={this.handlePasswordInput}
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
