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
          <div className="fast-execution">Fast Execution</div>
          <div className="fast-execution-content">
          In the stock market, a fraction of a second can mean the difference between a profit and a loss. Our team has built low-latency trading systems used by some of the world's largest financial institutions, and we're bringing that expertise to Robinhood. As a Robinhood customer, your self-directed orders will receive the best possible trade execution.
          </div>
          <div className="market-data"></div>
          <div className="fast-execution">Real-time Market Data</div>
          <div className="fast-execution-content">
          Robinhood's servers stream market data from exchanges in real-time. So while some brokerages delay quotes up to 20 minutes and charge for real-time data, you'll get timely quotes for free with Robinhood.
          </div>
          <div className="smart-notifications"></div>
          <div className="fast-execution">Smart Notifications</div>
          <div className="fast-execution-content">
          Robinhood notifies you in advance of scheduled events — like earnings, dividends, or splits, so you can get up-to-date information at the right time.
          </div>
        </div>
      </div>
    )
  }
}
