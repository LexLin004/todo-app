import React, { Component } from "react";
import { Link} from "react-router-dom";

class WelcomeComponent extends Component {
  render() {
    return(
      <div>
        <h1>To-Do Management App</h1>
        <div className="container">
          Welcome {this.props.params.name}. Manage your todos <Link to="/todos">here</Link>.
          {/** name should be the same as the name in /welcome/:name */}
        </div>
        
      </div>
    )
  }
}

export default WelcomeComponent