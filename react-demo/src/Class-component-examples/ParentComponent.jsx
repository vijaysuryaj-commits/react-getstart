// import React,{Component} from "react";
// import ChildComponent from "./ChildComponent";

// export default class ParentComponent extends Component{
//     state={
//         name:"Parent"
//     }

//     // greet=()=>{
//     //     alert(`Hello ${this.state.name}`);
//     // }
//     //passing and receiving args from child component
//     greet=(ChildName)=>{
//         alert(`Hello ${this.state.name} from ${ChildName}`);
//     }

//     render(){
//         return(
//             <div>
//                <ChildComponent  greetHandler={this.greet}/>
//             </div>
//         )
//     }
// }

import React, { Component } from 'react'
import RegularComponent from './RegularComponent'
import PureComp from './PureComponent'

class ParentComponent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:"Vijay",
      }
    }

    componentDidMount(){
        setInterval(()=>{
            this.setState({
                name:"Vijay"
            })
        }, 2000)
    }
  render() {
    console.log('Parent component render')
    return (
      <div>ParentComponent
        <RegularComponent name={this.state.name} />
        <PureComp name = {this.state.name} />
      </div>
    )
  }
}

export default ParentComponent

//output
// Parent component render ParentComponent.jsx:47:13
// Regular component render RegularComponent.jsx:5:13
// Pure component render PureComponent.jsx:5:13
// [vite] connected. client:827:12
// Parent component render ParentComponent.jsx:47:13
// Regular component render RegularComponent.jsx:5:13
// Parent component render ParentComponent.jsx:47:13
// Regular component render RegularComponent.jsx:5:13
// Parent component render ParentComponent.jsx:47:13
// Regular component render RegularComponent.jsx:5:13
// Parent component render ParentComponent.jsx:47:13
// Regular component render