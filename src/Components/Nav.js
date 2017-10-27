import React, {Component} from 'react';
import '../Style/Nav.css';

export default class Nav extends Component {
  constructor(){
    super();
    this.state = {
      scrolled: false
    }
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount(){
    window.addEventListener('scroll', this.handleScroll)
  }
  handleScroll(event) {
    console.log(event.srcElement.scrollingElement.scrollTop, this.state)
    	if(event.srcElement.scrollingElement.scrollTop > 200) {
    		this.setState({
    			scrolled: true
    		})
    	} else {
    		this.setState({
    			scrolled: false
    	   })
      }
    }

  render() {
    return (
      <div className="nav">
        <div className={this.state.scrolled ? "nav-scrolled" : "nav"}>
        <div className="nav-container">
          <div className="nav-logo">
          </div>
          <div className="nav-buttons-container">
            <div className="route-button">CAREERS</div>
            <div className="route-button">HELP</div>
            <div className="route-button">BLOG</div>
            <div className="signup-button">SIGN UP</div>
          </div>
        </div>
      </div>
      </div>
    )
  }
}
