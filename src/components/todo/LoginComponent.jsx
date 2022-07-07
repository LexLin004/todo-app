import React, { Component } from "react";
import AuthenticationService from "./AuthenticationService.js";

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
      // session storage
      AuthenticationService.registerSuccessfulLogin(this.state.username, this.state.password)
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
        <h1>Login</h1>
        <div className="container">
          {/*<ShowInvalidCredentials hadLoginFailed={this.state.hadLoginFailed} />
            <ShowLoginSuccessMessage showSuccessMessage={this.state.showSuccessMessage} /> */}
          {this.state.hadLoginFailed && <div className="alert alert-warning">Invalid Credentials</div>}
          {/*this.state.showSuccessMessage && <div>Login Successful</div>*/}
          User Name: <input type="text" name="username" value={this.state.username} onChange={this.handleChange}/>
          Password: <input type="password" name="password" value={this.state.password} onChange={this.handleChange}/>
          <button className="btn" onClick={this.loginClicked}>Login</button>
        </div>
      </div>
    );
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
export default LoginComponent