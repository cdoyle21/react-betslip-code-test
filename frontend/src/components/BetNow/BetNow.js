import React from 'react';

import './BetNow.css';

const betNow = ( props ) => (
    <div className="betNow">
        <p>Current Stake: <strong>{props.stake}</strong></p>
        <button 
            className="orderButton"
            disabled={!props.purchaseable}
            onClick={props.placedBet}>BET NOW</button>
    </div>
);

export default betNow;