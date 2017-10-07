import React, {Component} from 'react';
import '../Style/Home.css';

export default class Home extends Component {
  constructor(props){
    super(props);
    this.state = {
    }
  }

  render() {
    return (
      <div className="home-wrapper">
        <div className="home-container">
          <div className="text-container">
              <h1 className="robinhood">
                Robinhood
              </h1>
              <p className="home-intro">
                Free stock trading.<br/>
                Stop paying up to $10 for <br/>
                every trade.
              </p>
              <p className="home-sub-intro">
                Robinhood is available now! <br/>
                Signing up takes less than 4 minutes.
              </p>
              <div className="signup-button" id="big-signup">
                Sign Up
              </div>
              <div className="watch-button">
                <div className="play-button"></div>
                <div className="play-button-name">Watch Video</div>
              </div>
          </div>
          <div className="video-container">

          </div>
        </div>
      </div>
    )
  }
}
