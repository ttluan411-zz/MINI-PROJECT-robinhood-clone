import React, {Component} from 'react';
import '../Style/Protection.css';

export default class Protection extends Component {
  render() {
    return (
      <div className="pro-wrapper">
        <div className="pro-container">
          <div className="pro-photo"></div>
          <div className="pro-content">
            <p className="pro-header">
              Account Protection <br/>
              Secure and Encrypted
            </p>
            <p className="pro-subheader">
              Robinhood uses state-of-the-art security measures when handling your information. Your sensitive personal information is fully encrypted and securely stored.
              <br/>
              <br/>
              Robinhood Financial is a member of the
              <a href="http://www.finra.org">  Financial Industry Regulatory Authority (FINRA) </a>
              and the
              <a href="http://www.sipc.org"> Securities Investor Protection Corporation (SIPC)</a>
              , which protects securities customers of its members up to $500,000 (including $250,000 for claims for cash). Explanatory brochure available upon request or at
              <a href="http://www.sipc.org"> www.sipc.org</a>
              .
              <br/>
              <br/>
              Check the background of Robinhood on
              <a href="http://brokercheck.finra.org/Firm/165998"> FINRA's BrokerCheck</a>
            </p>

          </div>

        </div>
      </div>
    )
  }
}
