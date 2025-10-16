// import React, {Component} from "react";

// class Message extends Component{
//     constructor(){
//         super();
//         this.state={
//             msg:"Welcome visitor!",
//         };
//         this.handleClick=this.handleClick.bind(this)

//     }

//      handleClick(){
//         this.setState({
//             msg:"Thank You For Subscribing!",
//         })
//     }

//     render(){
//         return(
//             <>
//             <h2>{this.state.msg}</h2>
//             <button onClick={this.handleClick}>Subscribe</button>
//             </>
//         )
//     }
// }
// export default Message;

import React, { Component } from "react";

class Message extends Component {
    state = {
        msg: "Welcome visitor!",
    };

    handleClick = () => {
        this.setState({
            msg: "Thank You For Subscribing!",
        });
    };

    render() {
        // const{msg}=this.state;
        return (
            <>
                <h2>{this.state.msg}</h2>
                <button onClick={this.handleClick}>Subscribe</button>
            </>
        );
    }
}

export default Message;
