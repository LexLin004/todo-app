import React, { Component } from "react";
import { Link} from "react-router-dom";
import AuthenticationService from "./AuthenticationService.js";


class HeaderComponent extends Component {
  render() {
    const isUserLoggedIn = AuthenticationService.isUserLoggedIn()
    // console.log(isUserLoggedIn);
    return(
      <header>
        <nav className="navbar navbar-expand-lg bg-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="https://www.google.com/">Todo</a>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                {isUserLoggedIn && <li className="nav-item">
                  <Link className="nav-link" to="/welcome/xxxxhardcode" aria-current="page">Home</Link>
                </li>}
                {isUserLoggedIn && <li className="nav-item">
                  <Link className="nav-link" to="/todos">Todos</Link>
                </li>}
              </ul>
              <ul className="navbar-nav navbar-collapse justify-content-end">
                {!isUserLoggedIn && <li className="nav-item">
                  <Link className="nav-link" to="/login">Login</Link>
                </li>}
                {isUserLoggedIn && <li className="nav-item">
                  <Link className="nav-link" to="/logout" onClick={AuthenticationService.logout}>Logout</Link>
                </li>}
              </ul>
            </div>
          </div>
        </nav>
      </header>
    )
  }
}

export default HeaderComponent