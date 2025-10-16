import React from "react";
export default class Greet extends React.Component {
    render() {
        return (
            <>
                <h1> Hello {this.props.name}</h1>
                {this.props.children}
            </>
        )
    }
}