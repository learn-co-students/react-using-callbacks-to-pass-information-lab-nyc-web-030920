import React, { Component } from 'react';

export default class ColorSelector extends Component {

  //creates div for each color value
  makeColorSwatches = () => (
    ["#F00", "#F80", "#FF0", "#0F0", "#00F", "#508", "#90D", "#FFF", "#000"].map((str, idx) => {
      /* create callback inside makeColorSwatches method 
      allows access to individual div of color value when set within within React event handler */
      let callback = () => (
        this.props.setSelectedColor(str)
      )

      return <div onClick={callback} key={idx} className="color-swatch" style={{backgroundColor: str}}/>
    })
  )

  render() {
    //creates encapsulating div for all color value divs
    return (
      <div id="colorSelector">
        {this.makeColorSwatches()}
      </div>
    )
  }
}
