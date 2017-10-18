import React, {Component} from 'react';
import '../Style/Team.css';

export default class Team extends Component {
  render() {
    return (
      <div className="team-wrapper">
        <div className="team-container">
          <div className="team-content">
            We're a team of digital natives with deep financial expertise, backed by some of the world's most notable investors.
          </div>
          <div className="team-button">
            Join our team
          </div>
          <div className ="investor-container">
            <div className ="investor-div">
              <img src="https://d2ue93q3u507c2.cloudfront.net/assets/marketing/images/home/investors/DST.png"/>
            </div>
            <div className ="investor-div">
              <img src="https://d2ue93q3u507c2.cloudfront.net/assets/marketing/images/home/investors/Index.png"/>
            </div>
            <div className ="investor-div">
              <img src="https://d2ue93q3u507c2.cloudfront.net/assets/marketing/images/home/investors/GoogleVentures.png"/>
            </div>
            <div className ="investor-div">
              <img src="https://d2ue93q3u507c2.cloudfront.net/assets/marketing/images/home/investors/ThriveCapital.png"/>
            </div>
          </div>
          <div className="investor-container-2">
            <div className ="investor-div">
              <img src="https://d2ue93q3u507c2.cloudfront.net/assets/marketing/images/home/investors/Andreessen.png"/>
            </div>
            <div className ="investor-div">
              <img src="https://d2ue93q3u507c2.cloudfront.net/assets/marketing/images/home/investors/NEA.png"/>
            </div>
            <div className ="investor-div">
              <img src="https://d2ue93q3u507c2.cloudfront.net/assets/marketing/images/home/investors/RibbitCapital.png"/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
