import React, {Component} from 'react';
import '../Style/Demo.css';

export default class Demo extends Component {

  render() {
    return (
      <div className="demo-wrapper">
        <div className="demo-container">
          <div className="demo-header">
            Say goodbye to trading commissions <br/>
            And hello to the future of trading
          </div>
          <div className="second-video-wrapper">
            <div className="second-video-container">
               <video className="second-video"  autoPlay loop>
                   <source src="https://d2ue93q3u507c2.cloudfront.net/assets/marketing/video/trade/trade_animation.mp4"/>
               </video>
               <div className="demo-content-container">
                 <div className="demo-content">
                    Robinhood started with the <br/>
                    idea that a technology-<br/>
                    driven brokerage could <br/>
                    operate with significantly <br/>
                    less overhead.<br/>
                    <br/>
                    We cut out the fat that <br/>
                    makes other brokerages <br/>
                    costly -- hundreds of <br/>
                    storefront locations and <br/>
                    manual account <br/>
                    management.
                 </div>
                 <div className="demo-learn-button-container">

                 </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
