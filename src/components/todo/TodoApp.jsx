import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes, Link} from "react-router-dom";
import withNavigation from "./WithNavigation";
import withParams from "./withParams";

class TodoApp extends Component {
  render() {
    const LoginComponentWithNavigation = withNavigation(LoginComponent);
    const WelcomeComponentWithParams = withParams(WelcomeComponent);
    return (
      <div className='TodoApp'>
        <Router>
          <HeaderComponent/>
          <Routes>
            <Route path="/" element={<LoginComponentWithNavigation />} />
            <Route path="/login" element={<LoginComponentWithNavigation />} />
            <Route path="/welcome/:name" element={<WelcomeComponentWithParams />} />
            <Route path="/todos" element={<ListTodosComponent />} />
            <Route path="*" element={<ErrorComponent />} />
          </Routes>
          <FooterComponent/>
        </Router>
        {/*<LoginComponent/>
        <WelcomeComponent />*/}
      </div>
    );
  }
}

class HeaderComponent extends Component {
  render() {
    return(
      <div>
        Header <hr/>
      </div>
    )
  }
}

class FooterComponent extends Component {
  render() {
    return(
      <div>
        <hr/> Footer
      </div>
    )
  }
}

function ErrorComponent() {
  return <div>An Error Occured.</div>
}

/** controlled component, b/c everything is now dictated by the state which is inside the LoginComponent.
 * Whenever you make a change in here, state is updated.
 * When the state is updated, the changes are reflected back in the element.
*/
class LoginComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: 'please input username',
      password: '',
      hadLoginFailed: false,
      showSuccessMessage: false
    }
    /*
    this.handleChange = this.handleUsernameChange.bind(this)
    this.handlePasswordChange = this.handlePasswordChange.bind(this) */
    this.handleChange = this.handleChange.bind(this)
    this.loginClicked = this.loginClicked.bind(this)

  }

  /*
  handleUsernameChange(event){ // synthetic event passed in
    this.setState({username: event.target.value})
  } 
  handlePasswordChange(event){ // synthetic event passed in
    this.setState({password: event.target.value})
  }*/
  handleChange(event){ // refactor (the name of the input should be same as state element)
    this.setState({[event.target.name]: event.target.value})
  }

  loginClicked() {
    // hardcode: admin, admin
    if (this.state.username === 'admin' && this.state.password==='admin') {
      // this.props.history.push("/welcome") // redirect to welcome page (REACT-ROUTE V5)
      this.props.navigate(`/welcome/${this.state.username}`)
      // this.setState({showSuccessMessage: true})
      // this.setState({hadLoginFailed: false})
    } else {
      this.setState({showSuccessMessage: false})
      this.setState({hadLoginFailed: true})
    }
    console.log(this.state);
  }

  render() {
    return (
      <div>
        {/*<ShowInvalidCredentials hadLoginFailed={this.state.hadLoginFailed} />
           <ShowLoginSuccessMessage showSuccessMessage={this.state.showSuccessMessage} /> */}
        {this.state.hadLoginFailed && <div>Invalid Credentials</div>}
        {this.state.showSuccessMessage && <div>Login Successful</div>}
        User Name: <input type="text" name="username" value={this.state.username} onChange={this.handleChange}/>
        Password: <input type="password" name="password" value={this.state.password} onChange={this.handleChange}/>
        <button onClick={this.loginClicked}>Login</button>
      </div>
    );
  }
}

class WelcomeComponent extends Component {
  render() {
    return(
      <div>
        To-do Management App <br/>
        Welcome {this.props.params.name}. Manage your todos <Link to="/todos">here</Link>.
        {/** name should be the same as the name in /welcome/:name */}
      </div>
    )
  }
}

class ListTodosComponent extends Component {
  constructor(props){
    super(props)
    this.state = {
      todos: [
        {id: 1, description: 'learn React1', done: false, targetDate: new Date()},
        {id: 2, description: 'learn React2', done: false, targetDate: new Date()}
      ]
    }
  }

  render() {
    return(
      <div>
        <h1>List Todos</h1>
        <table>
          <thead>
            <tr>
              <th> id </th>
              <th> description </th>
              <th> done? </th>
              <th> Target Date </th>
            </tr>
          </thead>
          <tbody>
            {
              this.state.todos.map(
                todo => 
                  <tr>
                    <td>{todo.id}</td>
                    <td>{todo.description}</td>
                    <td>{todo.done.toString()}</td>
                    <td>{todo.targetDate.toString()}</td>
                  </tr>
              )
            }
          </tbody>
        </table>
      </div>
    )
  }
}

/**
 * function ShowInvalidCredentials(props) {
 *   if(props.hadLoginFailed) {
 *     return <div>Invalid Credentials</div>
 *   }
 *   return null
 * }
 * 
 * function ShowLoginSuccessMessage(props) {
 *   if(props.showSuccessMessage) {
 *     return <div>Login Successful</div>
 *   }
 *   return null
 * } 
 */

export default TodoApp;