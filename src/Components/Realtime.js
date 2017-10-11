import React, {Component} from 'react';
import '../Style/Realtime.css';

export default class Realtime extends Component {
  render() {
    return (
      <div className="time-wrapper">
        <div className="time-container">
          <div className="time-header">
            Stay on top of your portfolio.<br/>
            Anytime. Anywhere.
          </div>
          <div className="time-clock"></div>
        </div>
      </div>
    )
  }
}
