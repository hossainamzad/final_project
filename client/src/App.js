import React, { Component } from 'react';
import './App.css';
import Images from './components/Images';
// import dropzone to drop images or files on the website.
import Dropzone from 'react-dropzone';
// to hash the string just do sha(message)
//to generate a long string for security. encription
import sha1 from 'sha1';
import axios from 'axios';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
        images: []
    }
  this.uploadFile = this.uploadFile.bind(this);
  }
   uploadFile(files){
    console.log("images uploaded")
    e.preventDefault();
    const itemsImages = this.state.images;
    const timestamp = Date.now()/1000
    const uploadPreset = 'dabm2v1z'
    const paramString = 'timestamp='+timestamp+'&upload_preset'+uploadPreset+'5A51CafWfIhXo3-Q6OIUEbFAwQQ'
    const signature = sha1(paramString)
    axios({
      url: `https://api.cloudinary.com/v1_1/kumrabytes/image/upload`,
      method: "POST",
      headers: {
        Authorization:
      }
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to the KUMRA-BYTES</h1>
          <p>A food sharing app built to prevent the food wastage</p>
        </header>
        <Dropzone onDrop={this.uploadFile}/>
        <Images />
      </div>
    );
  }
}

export default App;
