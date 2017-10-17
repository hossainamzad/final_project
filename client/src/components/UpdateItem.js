import React, { Component } from 'react';
class UpdateItem extends Component{
  // constructor(){
  //   this.state = {
  //     itemName: ''
  //   }
  // }

  // handleTextChange(e){
  //   this.setState({
  //     [e.target.name]: e.target.value
  //   })
  // }

  render(){
    return(
      <div className="addItemContainer">UpdateItem Component
        <form onSubmit={this.props.handleItemUpdate}>
          <input
            className="name"
            type="text"
            placeholder="Enter the food's name"
            name="itemName"
            value={this.props.itemName}
            onChange={this.props.handleTextChange} />
          <input
            className="description"
            type="text"
            placeholder="description of the food"
            name="description"
            value={this.props.description}
            onChange={this.props.handleTextChange} />
          <input
            className="expiration"
            type="text"
            placeholder="expiration date"
            name="expiration"
            value={this.props.expiration}
            onChange={this.props.handleTextChange} />
          <input
            className="price"
            type="text"
            placeholder="$"
            name="price"
            value={this.props.price}
            onChange={this.props.handleTextChange} />
          <input type="file" onChange={this.props.handleChange} name="uploadedImage" />
          <input type="submit" value="Submit" />

        </form>
      </div>
    )
  }
}
export default UpdateItem;
