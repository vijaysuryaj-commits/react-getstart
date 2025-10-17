import React, { Component } from 'react'

class RegularComponent extends Component {
  render() {
    console.log('Regular component render')
    return (
      <div>Regular Component { this.props.name}</div>
    )
  }
}

export default RegularComponent

//it doesnt implement shouldComponentUpdate method it always returns true by default