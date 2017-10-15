import React, {Component} from 'react';
import { Link, Redirect } from 'react-router-dom';
class Navbar extends Component{
  render(){
    if(!this.props.isAuthenticated) {
    return(
      <header>
        <div className="breadcrumb is-right">
        <ul>
          <Link to="/"><div className="login">HOME</div></Link>
          <Link to="/login"><div className="login">LOGIN</div></Link>
          <Link to="/register"><div className="sign">SIGN UP</div></Link>
          </ul>
        </div>
      </header>
      )
    } else {
      return (
        <div className="breadcrumb is-right">
        <ul>
            <li><Link to="/"><div className="login">HOME</div></Link></li>
            <li><Link to='/'><div className="login" onClick={this.props.logOut}>LOG OUT</div></Link></li>
            <li><Link to="/additem"><div className="login">ADD ITEM</div></Link></li>
            <li><Link to="/cart"><div className="login">CART</div></Link></li>
          </ul>
        </div>
      );
    }
  }
}
export default Navbar;
