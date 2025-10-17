// import React, { Component } from 'react'

//  class LifecycleA extends Component {
//     constructor(props) {
//       super(props)

//       this.state = {
//          name:"Vijay"
//       }
//       console.log("LifecyleA constructor")
//     }
//     static getDerivedStateFromProps(props,state){
//         console.log("LifecyleA getDerivedStateStateFromProps()")
//         return null;
//     }

//     componentDidMount(){
//         console.log("LifecyleA componentDidMount()")
//     }

//   render() {
//     console.log("LifecycleA render()")
//     return (
//       <div>LifecycleA</div>
//     )
//   }
// }

// export default LifecycleA
//output

// LifecyleA constructor LifecycleA.jsx:10:15
// LifecyleA getDerivedStateStateFromProps() LifecycleA.jsx:13:17
// LifecycleA render() LifecycleA.jsx:22:13
// LifecyleA componentDidMount() LifecycleA.jsx:18:17

import React, { Component } from 'react'
import LifecycleB from './LifecycleB'
class LifecycleA extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: "Vijay"
        }
        console.log("LifecyleA constructor")
    }

    handleChange = () => {
        this.setState({
            name: "Surya"
        })
    }

    static getDerivedStateFromProps(props, state) {
        console.log("LifecyleA getDerivedStateStateFromProps()")
        return null;
    }

    componentDidMount() {
        console.log("LifecyleA componentDidMount()")
    }

    shouldComponentUpdate() {
        console.log("LifecycleA shouldComponentUpdate")
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("LifecycleA getSnapshotBeforeUpdate")
        return null
    }
    componentDidUpdate() {
        console.log("LifecycleA componentDidUpdate")
    }

    render() {
        console.log("LifecycleA render()")
        return (
            <div>
                <div>LifecycleA</div>
                <button onClick={this.handleChange}>Click to chage state</button>
                <LifecycleB />
            </div>
        )
    }
}

export default LifecycleA


//output
// LifecyleA constructor LifecycleA.jsx:46:15
// LifecyleA getDerivedStateStateFromProps() LifecycleA.jsx:49:17
// LifecycleA render() LifecycleA.jsx:58:13
// LifecyleB constructor LifecycleB.jsx:10:15
// LifecyleB getDerivedStateStateFromProps() LifecycleB.jsx:13:17
// LifecycleB render() LifecycleB.jsx:22:13
// LifecyleB componentDidMount() LifecycleB.jsx:18:17
// LifecyleA componentDidMount() LifecycleA.jsx:54:17
//component did mount will be invoked automatically when all of its childern components are mounted/inserted into the dom


//output
// LifecyleA constructor LifecycleA.jsx:46:17
// LifecyleA getDerivedStateStateFromProps() LifecycleA.jsx:56:17
// LifecycleA render() LifecycleA.jsx:78:17
// LifecyleB constructor LifecycleB.jsx:10:17
// LifecyleB getDerivedStateStateFromProps() LifecycleB.jsx:13:17
// LifecycleB render() LifecycleB.jsx:34:17
// LifecyleB componentDidMount() LifecycleB.jsx:18:17
// LifecyleA componentDidMount() LifecycleA.jsx:61:17
// LifecyleA getDerivedStateStateFromProps() LifecycleA.jsx:56:17
// LifecycleA shouldComponentUpdate LifecycleA.jsx:65:17
// LifecycleA render() LifecycleA.jsx:78:17
// LifecyleB getDerivedStateStateFromProps() LifecycleB.jsx:13:17
// LifecycleB shouldComponentUpdate LifecycleB.jsx:21:17
// LifecycleB render() LifecycleB.jsx:34:17
// LifecycleB getSnapshotBeforeUpdate LifecycleB.jsx:26:17
// LifecycleA getSnapshotBeforeUpdate LifecycleA.jsx:70:17
// LifecycleB componentDidUpdate LifecycleB.jsx:30:17
// LifecycleA componentDidUpdate


//unmounting phase -> clean ups(removing event handlers etc), no re-rendering and mustnt use setState or change states during unmounting phases
//method is invoked immediately before the component is unmounted/destroyed/ removed from the dom