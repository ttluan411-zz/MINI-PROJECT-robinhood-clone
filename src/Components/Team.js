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
        </div>
      </div>
    )
  }
}
