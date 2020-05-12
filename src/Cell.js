import React, { Component } from 'react';

export default class Cell extends Component {
  // Matrix Component passes props to Cell of color
  // initial passed color is the initial state
  constructor(props) {
    super(props)
    this.state = {
      color: props.color
    }
  }

  // instance method to handle clicking on cell to change the color to the color set by the Color Selector
  handleClick = () => {
    this.setState({
      color: this.props.selectedColor
    })
  }
  
  // add method to the React event listener
  render() {
    return (
      <div onClick={this.handleClick} className="cell" style={{backgroundColor: this.state.color}}>
      </div>
    )
  }
  
}
