import React from 'react';
import { Link, Redirect } from 'react-router-dom';

const Footer = (props) => {
    return (
      <footer>
        <div className="columns">
          <div className="column">
            <Link to="#" className="card-footer-item" style={{color:"white"}}>&copy; amzadhossain</Link>
            <Link to="#" className="card-footer-item" onClick= {() => alert("I won U")} style={{color:"white"}}>Terms of Service</Link>
          </div>
          <div className="column">
            <Link to="#" className="card-footer-item" style={{color:"white"}}>About</Link>
            <Link to="#" className="card-footer-item" style={{color:"white"}}>Learn more</Link>
            <Link to="#" className="card-footer-item" style={{color:"white"}}>Career</Link>


          </div>
          <div className="column">
            <p className="title is-6" style={{color:"white"}}>Food Sharing</p>
            <p className="title is-6" style={{color:"white"}}>10 East, 21 street, Manhattan</p>
            <p className="title is-6" style={{color:"white"}}>Monday-Friday</p>
          </div>
          <div className="column">
            <h2 className="title is-6" style={{color:"white"}}>Facebook</h2>
            <h2 className="title is-6" style={{color:"white"}}>Twitter</h2>
            <h2 className="title is-6" style={{color:"white"}}>Instagram</h2>
          </div>
        </div>
        </footer>
    );
}

export default Footer;

