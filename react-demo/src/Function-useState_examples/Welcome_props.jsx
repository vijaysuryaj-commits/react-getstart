import React from "react";
function Welcome(props){
    let {name,age,email}=props.details
    return(
        <div>
            {/* <h1>Welcome {props.text}</h1> */}
            <p>Name: {name} Age: {age} email: {email}
            </p>
            {props.children}
        </div>
    )
}
export default Welcome;