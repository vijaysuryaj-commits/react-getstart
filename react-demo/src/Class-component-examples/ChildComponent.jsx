import React,{Component} from "react";

class ChildComponent extends Component{
    render(){
        return(
            <>
            {/* <button onClick={this.props.greetHandler}>Greet</button> */}
            {/* passing arguments from child to parent */}
            <button onClick={()=>this.props.greetHandler("Child")}>Greet</button>

            </>
        )
    }
}
export default ChildComponent;