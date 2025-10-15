import React from "react";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      show: false,
    };
    console.log("App constructor");
  }

  componentDidMount() {
    console.log("App componentDidMount");
  }

  componentDidUpdate(){
    console.log("App component Updated");
  }
  render() {
    console.log("App render, show =", this.state.show);
    return (
      <div>
        <h1>Hi there!</h1>
        {this.state.show ? <Child /> : null}
        <button onClick={() => this.setState({ show: !this.state.show })}>
          Click me
        </button>
      </div>
    );
  }
}

export default App;

class Child extends React.Component {
  componentDidMount() {
    console.log("Child componentDidMount");
  }

  componentWillUnmount() {
    console.log("Child componentWillUnmount");
  }

  render() {
    console.log("Child render");
    return <h1>I am child component</h1>;
  }
}
