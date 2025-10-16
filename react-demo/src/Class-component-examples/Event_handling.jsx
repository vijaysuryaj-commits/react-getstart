import React, {Component} from "react";
import './Event_handling.css'


class EventHandler extends Component{
    state={
        showImage:true,
        buttonText:'Click to hide image',
    }
    handleClick=()=>{
        this.setState((prevState)=>({
            showImage: !prevState.showImage,
            buttonText: prevState.showImage ? "Click to show image" : "Click to hide image"
        }))
    }

    render(){
        let image ={
            height:"500px",
            width:"1000px"
        }
        return(
            <div className="image-container">
            {/* <style>
                {`
                .image {
                    height:500px;
                    width:1000px;
                }
                `}
            </style> */}
            {this.state.showImage ? (<img id="image"src="https://cdn.wallpapersafari.com/59/2/e7cxDY.jpg" className="image" style={image}></img>):null}
            <button onClick={this.handleClick}> {this.state.buttonText}</button>
            </div>
        )
    }
}
export default EventHandler;