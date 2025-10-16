import React, { Component } from "react";

class Counter extends Component {
    state = {
        count: 0
    }

    handleClick = () => {
        // this.setState({
        //     count:this.state.count+1
        // })
        // this.state.count = this.state.count+1
        // console.log(this.state.count);

        // this.setState({
        //     count:this.state.count+1
        // },
        // ()=>{
        //     console.log("call back value",this.state.count)
        // })

        this.setState((prevState) => ({
            count: prevState.count + 1
        }),
    ()=>{
        console.log(this.state.count)
    })
        // console.log(this.state.count); //synchronous log statement
    }
    incrementFive = () => {
        this.handleClick();
        this.handleClick();
        this.handleClick();
        this.handleClick();
        this.handleClick();

    }
    render() {
        return (
            <>
                <h1>You clicked the button {this.state.count} times</h1>
                <button onClick={this.incrementFive}>Click me!</button>
            </>

        )
    }

}
export default Counter;