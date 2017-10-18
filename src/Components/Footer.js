import React, {Component} from 'react';
import '../Style/Footer.css';

export default class Footer extends Component {
  render() {
    return (
      <div className="footer-wrapper">
        <div className="footer-container">
          <div className="download-container">
            <div className="download-button">
              <img src="https://d2ue93q3u507c2.cloudfront.net/assets/marketing/images/badges/google_play.png"/>
            </div>
            <div className="download-button">
              <img src="https://d2ue93q3u507c2.cloudfront.net/assets/marketing/images/badges/app_store.png"/>
            </div>
          </div>
          <div className="global-container">
            <div className="flag-container">
              <img src="https://d2ue93q3u507c2.cloudfront.net/assets/marketing/images/region/us.png"/>
            </div>
            <div className="social-container"></div>
          </div>
        </div>
      </div>
    )
  }
}
