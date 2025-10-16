# React State Management Notes

never modify the state directly because react will not re-render the component
use setState(class components) to modify the state property
    -->Everytime state property changes using setState react re-renders the component
    -->whenever need to execute code after state changes don't place it below setState instead place it as callback function inside the setState arguments

Batching->
if you call setState multiple times it will consider as single call ->
because React combines(batches) many setState calls into one to be faster.
    example if you do setState three times quickly, React might only update once
    for example
    this.setState({ count: this.state.count + 1 });
    this.setState({ count: this.state.count + 1 });
    this.setState({ count: this.state.count + 1 });

count goes up by only one

use this it makes count go up by 3
this.setState((prevState) => ({ count: prevState.count + 1 }));
this.setState((prevState) => ({ count: prevState.count + 1 }));
this.setState((prevState) => ({ count: prevState.count + 1 }));
when you have to update state based on previous state pass prevstate as function with argument
function has access to previous state which is used to calculate the new state

React focus on fast and efficient. If it re-renders the component every time setState is called, the app would slow down when making many updates quickly.

So instead, React waits a moment to collect all setState calls made during the same event or lifecycle step, then:

Combines them into one update

Renders once instead of many times

This is called batching.

binding event handlers approaches

    -1>onClick={this.eventHandler.bind(this)}    //generates newer handlers on every re-render ->performance issue in large applications
    2->onClick={() => this.eventHandler()}       //this also has performance implications
    3->onClick={this.eventHandler}   ->inside constructor-> add this this.evenHandler=this.eventHandler.bind(this) -> binds one time when constructor is called
    4->use arrow function as class property for eventHandler instead of using normal functions because arrow functions doesn't have their own this context it gets it from the outer scope

    approach 3 and 4 are optimal