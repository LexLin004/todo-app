import React, { Component } from 'react';
import './App.css';
import TodoApp from './components/todo/TodoApp';
import './bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TodoApp />
      </div>
    );
  }
}
export default App;

/** There is no impact on using App.js as Class component.
 * You can create components in react either using functional or class based components.
 * Both techniques are equivalent and will give you the exact same output.
 * But nowadays, developers are moving towards functional approach because:
 * 1. It's easier to read
 * 2. Less lines of code
 * 3.  there is a slight performance improvement
 * But for beginners class based approach is better, 
 * as they can relate it to Java concepts and its easier to find class based component
 * sample projects/examples throughout Internet. Also in some UI libraries reference docs,
 * you may only find class based component examples describing on how to use it. */

/** class component example 
class FirstComponent extends Component {
  render() {
    return (
      <div className='firstComponent'>
        First Component
      </div>
    );
  }
}
Used in the class App / render() / return / with <FirstComponent /> or <FirstComponent></FirstComponent>
*/

/** function component example 
function SecondComponent() {
  return (
    <div className='secondComponent'>
      Second Component
    </div>
  );
}
Used in the class App / render() / return / with <SecondComponent /> or <SecondComponent></SecondComponent>
*/