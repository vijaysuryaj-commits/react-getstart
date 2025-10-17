import React, { PureComponent } from 'react'

class PureComp extends PureComponent {
  render() {
    console.log('Pure component render')
    return (
      <div>Pure Component { this.props.name}</div>
    )
  }
}

export default PureComp

//pure component does a shallow comparision of props and state

//SC(shallow comparision)
//primitive & complex types
//primitive a(SC)b returns true if a nd b jhave same value and same types
//ex: string 'vijay' (SC) string 'vijay' returns true

//complex type -> a(SC)b return true if a and b refer same object
//ex:
// var a = [1,2,3];
// var b = [1,2,3];
// var c = a;
// var res = a===b; // false
// var res = a===c;//true

//pure component implements shouldComponentUpdate witha shallow props and state comparison

//-> SC of prevStatewith current state
//-> SC of prevProps with current props 
//if differs -> rerender