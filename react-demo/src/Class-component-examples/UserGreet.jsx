//if else rendering
// import React, { Component } from 'react'

// class UserGreet extends Component {
//     state={
//         isLoggedIn:true,
//     }
//   render() {
//     if(this.state.isLoggedIn)
//     {
//         return (
//         <div>Welocme Vijay!</div>
//         )
//     }
//     else{
//         return(
//             <div>Welcome Guest!</div>
//         )
//     }
//   }
// }

// export default UserGreet

//draw backs code repetition and crowded


//element variables

// import React, { Component } from 'react'

// class UserGreet extends Component {
//     state={
//         isLoggedIn:false,
//     }
//   render() {
//     let element
//     if(this.state.isLoggedIn)
//     {
//         element = <div>Welcome Vijay!</div>
//     }   
//     else{
//         element = <div>Welcome Guest!</div>

//     }
//     return(
//         <>
//         {element}
//         </>
//     )
//   }
// }

// export default UserGreet

//ternary conditional operator approach -> can be used inside jsx

// import React, { Component } from 'react'

// class UserGreet extends Component {
//     state = {
//         isLoggedIn: false,
//     }
//     render() {

//         return (

//             this.state.isLoggedIn ?
//                 (<div>Welcome Vijay!</div>) :
//                 (<div>Welcome Guest!</div>)

//         )
//     }
// }

// export default UserGreet

//short circuit operator
import React, { Component } from 'react'

class UserGreet extends Component {
    state = {
        isLoggedIn: true,
    }
    render() {

        return (

            this.state.isLoggedIn && (<div>Welcome Vijay!</div>)


        )
    }
}

export default UserGreet

//stick to ternary or short circuit operator for better readability 