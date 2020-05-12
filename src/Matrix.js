import React, { Component } from 'react';
import learnSymbol from './data.js'
import Cell from './Cell.js'
import ColorSelector from './ColorSelector.js'

export default class Matrix extends Component {

  constructor() {
    super()
    this.state = {
      selectedColor: '#FFF'
    }
  }

    // argument allow for sibling components to change state of each other
    setSelectedColor = (newColor) => {
      this.setState({
        selectedColor: newColor
      })
    }
  

  // maps over each element in single array 
  // each array in learnSymbol consist of color values
  // creates Cell components (divs) out of each element in array
  // Cell component returns a div with background color set to color value passed as a prop 
  genRow = (vals) => (
    /* because the cell component only needs to know what the selected color is and not change it, will pass down the selectedColor prop */
    vals.map((val, idx) => <Cell key={idx} color={val} selectedColor={this.state.selectedColor} />)
  )

  // maps over each array within the learnSymbol AoA
  genMatrix = () => (
    this.props.values.map((rowVals, idx) => <div key={idx} className="row">{this.genRow(rowVals)}</div>)
  )

  render() {
    return (
      <div id="app">
        {/* because the color selector component needs to change the color based on which color is selected, will pass down the method that changes the color state as a prop */}
        <ColorSelector setSelectedColor={this.setSelectedColor} />
        <div id="matrix">
          {this.genMatrix()}
        </div>
      </div>
    )
  }
}

Matrix.defaultProps = {
  values: learnSymbol
}
