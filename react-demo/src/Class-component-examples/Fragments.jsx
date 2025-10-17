// fragments lets grouping of child elements without adding extra nodes to the dom

import React, { Component } from 'react'

class Fragments extends Component {
    render() {
        return (
            //   <div>Fragments</div>
            // <div>
            //     <h1>Fragment</h1>
            //     <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae, aliquam?</p>
            // </div>
            <React.Fragment>
                <h1>Fragment</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae, aliquam?</p>
            </React.Fragment>
        )
    }
}

export default Fragments

//key attribute is the only attribute that can be passed to React.Fragment
//shorthand syntax -> <> </> -> if this syntax is used we cant pass key attrbute