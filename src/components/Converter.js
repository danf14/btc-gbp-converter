import React, {Component} from 'react';

const coindesk = 'https://api.coindesk.com/v1/bpi/currentprice/USD.json';
const openExchangeRates = 'http://openexchangerates.org/api/latest.json?app_id=00a9739747fb49c5a8e92e99d4e5c828';

class Converter extends Component {

  constructor() {
    super();
    this.state ={btc:0, gbp:0, time:'',};
    this.fetchData = this.fetchData.bind(this);
  }

  fetchData() {

    const date = new Date();
    const utcDate = date.toUTCString();

    fetch(coindesk)
    .then(results => {
      return results.json();
    }).then((jsonResult) => {
      this.setState({
        btc: jsonResult.bpi.USD.rate_float,
      }) 
    })
    
    fetch(openExchangeRates)
    .then(results => {
      return results.json();
    }).then((jsonResult) => {
      this.setState({
        gbp:jsonResult.rates.GBP,
      })
    })

    this.setState({ time: utcDate})
  }
  
  componentWillMount() {
    this.fetchData()
  }

  render() {
    return (

      <div style={{paddingTop:'15%',}}>
        <p><small style={{ color:'rgba(210, 210, 210, 0.9)', }}>gbp/btc</small></p>
        <p style={{letterSpacing: '-3px',}}>
          { this.state.btc && this.state.gbp ? (this.state.btc * this.state.gbp).toFixed(2) : 'Updating...' }
        </p>
        <p style={{ color:'rgba(210, 210, 210, 0.9)', fontSize:'0.2rem', lineHeight:'0.2rem', }}>
          { this.state.time }
        </p>
        <p>
          <button className="btn" onClick={ this.fetchData }>update</button>
        </p>
      </div>  
      
    )
  }
}

export default Converter;
