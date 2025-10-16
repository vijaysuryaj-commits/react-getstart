import React from "react";
// import ControlledForm from "./Components/ControlledForm";
// import Greet from "./Class-state-examples/Greet";
// import Welcome from "./Function-useState_examples/Welcome";
// class App extends React.Component {
// //   constructor() {
// //     super();
// //     this.state = {
// //       show: false,
// //     };
// //     console.log("App constructor");
// //   }

// //   componentDidMount() {
// //     console.log("App componentDidMount");
// //   }

// //   componentDidUpdate(){
// //     console.log("App component Updated");
// //   }
//   render() {
//     // console.log("App render, show =", this.state.show);
//     const details ={
//       name:"vijay",
//       age:21,
//       email:"vijay@gmail.com"
//     }
//     return (
//       <div>
//         {/* <h1>Hi there!</h1> */}
//         {/* <ControlledForm></ControlledForm> */}
//         {/* {this.state.show ? <Child /> : null} */}
//         {/* <button onClick={() => this.setState({ show: !this.state.show })}> */}
//           {/* Click me
//         </button> */}
//         {/* <Greet name="Vijay" /> */}
//         <Greet name="Vijay" > 
//           <p>I am from Coimbatore</p>
//           <h3>Nice to meet you!</h3>
//           </Greet>
//         <Greet name="Surya" > <p>I am from Erode</p></Greet>
//         {/* <Greet name="Surya" /> */}
//         {/* <Welcome text="To Rently"/> */}
//         {/* <Welcome details={details} /> */}
//         <Welcome details={details} >
//           <h3>Coimbatore</h3>
//         </Welcome>

//       </div>
//     );
//   }
// }

// export default App;

// class Child extends React.Component {
//   componentDidMount() {
//     console.log("Child componentDidMount");
//   }

//   componentWillUnmount() {
//     console.log("Child componentWillUnmount");
//   }

//   render() {
//     console.log("Child render");
//     return <h1>I am child component</h1>;
//   }
// }

// import Message from "./Class-state-examples/Message";
// function App(){
//   return(
//     <>
//       <h1>Rently Youtube</h1>
//       <Message />
//     </>
//   )
// }
// export default App;

// import Counter from './Class-component-examples/Counter_state'
// function App(){
//   return(
//     <>
//     <Counter>
//       </Counter></>
//   )
// }
// export default App;

import EventHandler from "./Class-component-examples/Event_handling";
export default function App() {
  return (
    <>
    <EventHandler/>
    </>
  )
}