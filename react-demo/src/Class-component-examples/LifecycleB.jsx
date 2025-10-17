import React, { Component } from 'react'

class LifecycleB extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: "Vijay"
        }
        console.log("LifecyleB constructor")
    }
    static getDerivedStateFromProps(props, state) {
        console.log("LifecyleB getDerivedStateStateFromProps()")
        return null;
    }

    componentDidMount() {
        console.log("LifecyleB componentDidMount()")
    }
    shouldComponentUpdate() {
        console.log("LifecycleB shouldComponentUpdate")
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("LifecycleB getSnapshotBeforeUpdate")
        return null
    }
    componentDidUpdate() {
        console.log("LifecycleB componentDidUpdate")
    }

    render() {
        console.log("LifecycleB render()")
        return (
            <div>LifecycleB</div>
        )
    }
}

export default LifecycleB