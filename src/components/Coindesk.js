import React, {Component} from 'react';
import coindesk_logo from '../assets/img/coindesk-logo.png'

class Coindesk extends Component {

  render() {
    return (
      <div style={{position:'fixed', bottom:'5px', right:'5px', fontSize:'0.15rem'}}>
        <div style={{display:'inline-block', marginBottom:'7px', }}>Powered by</div> 
        <a href="https://www.coindesk.com/price/" style={{display:'inline-block', paddingLeft:'10px', }} target="_blank" rel="noopener noreferrer">
          <img src={coindesk_logo} style={{width:'150px', height:'29px',marginBottom:'-7px', }} alt="Coindesk logo" />
        </a>
      </div>
    )
  }
}

export default Coindesk;
