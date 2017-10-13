import React, {Component} from 'react';
import { Link, Redirect } from 'react-router-dom';
class Navbar extends Component{
  render(){
    if(!this.props.isAuthenticated) {
    return(
      <header>
        <div className="reg">
          <div className="VLine">||</div>

          <Link to="/"><div className="login">Home</div></Link>
          <div className="VLine">||</div>
          <Link to="/login"><div className="login">Login</div></Link>
          <div className="VLine">||</div>
          <Link to="/register"><div className="sign">Sign up</div></Link>
          <div className="VLine">||</div>
          <Link to="/additem"><div className="login">Add Item</div></Link>
          <div className="VLine">||</div>
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
