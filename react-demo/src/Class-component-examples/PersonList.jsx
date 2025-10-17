import React, { Component } from 'react'

 class PersonList extends Component {
  render() {
    return (
      <div>
        <h2>Index:{this.props.index} I am {this.props.person.name}. I am {this.props.person.age} years old. I know {this.props.person.skill}</h2>
      </div>
    )
  }
}

export default PersonList