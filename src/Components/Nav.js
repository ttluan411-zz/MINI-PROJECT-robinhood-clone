import React, {Component} from 'react';
import '../Style/Nav.css';

export default class Nav extends Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div className="nav">
        <div className="nav-container">
          <div className="nav-logo">
          </div>
          <div className="nav-buttons-container">
            <div className="career-button">CAREERS</div>
            <div className="help-button">HELP</div>
            <div className="blog-button">BLOG</div>
            <div className="signup-button">SIGN UP</div>
          </div>
        </div>
      </div>
    )
  }
}
