import React, {Component} from 'react';

const coindesk = 'https://api.coindesk.com/v1/bpi/currentprice/USD.json';
const openExchangeRates = 'http://openexchangerates.org/api/latest.json?app_id=00a9739747fb49c5a8e92e99d4e5c828';

class Converter extends Component {

  constructor() {
    super();
    this.state ={btc:0, gbp:0,};
  }
  
  componentWillMount() {

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
    
  }

  render() {
    return (

      <div>
        { this.state.btc && this.state.gbp ? this.state.btc * this.state.gbp : 'Updating...' }
      </div>
        
    )
  }
}

export default Converter;
