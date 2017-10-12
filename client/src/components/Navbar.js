import React, {Component} from 'react';
import { Link } from 'react-router-dom';
class Navbar extends Component{
  render(){
    if(!this.props.isAuthenticated) {
    return(
      <header>
        <div className="reg">
          <Link to="/"><div className="login">Home</div></Link>
          <div className="VLine">|</div>
          <Link to="/login"><div className="login">Login</div></Link>
          <div className="VLine">|</div>
          <Link to="/register"><div className="sign">Sign up</div></Link>
        </div>
      </header>
      )
    } else {
      return (
        <div><Link to="/"><div className="login">Home</div></Link></div>
      );
    }
  }
}
export default Navbar;
