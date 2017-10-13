import React, { Component } from 'react';
class AddItem extends Component{
  render(){
    return(
      <div className="addItemContainer">AddItem Component
        <form onSubmit={this.props.uploadFile}>
          <input
            className="name"
            type="text"
            placeholder="Enter the food's name"/>
          <input className="description"
            type="text"
            placeholder="description of the food"/>
          <input className="expiration"
            type="text"
            placeholder="expiration date"/>
          <input className="price"
            type="text"
            placeholder="$value"/>
          <input type="file" onChange={this.props.handleChange} name="upload" />
          <input type="submit" value="Submit"
              // onClick={this.props.sendToTheDatabase}

            />

        </form>
      </div>
    )
  }
}
export default AddItem;
