import React, { Component } from 'react';

export default class ColorSelector extends Component {

  makeColorSwatches = () => (
    ["#F00", "#F80", "#FF0", "#0F0", "#00F", "#508", "#90D", "#FFF", "#000"].map((str, idx) => {
      let callBack = () => this.props.setSeletedColor(str)
      return <div onClick={callBack} key={idx} className="color-swatch" style={{backgroundColor: str}}/>
    })
  )

  render() {
    console.log('inside color selector', this.props)
    return (
      <div id="colorSelector">
        {this.makeColorSwatches()}
      </div>
    )
  }
}