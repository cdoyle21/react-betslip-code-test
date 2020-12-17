import React from 'react';

import Aux from '../../hoc/Aux/Aux';

const orderSummary = (props) => {    
    return (
    <Aux>
        <h3>Receipt</h3>
        <p>Your bet has been placed</p>
        <p><strong>Total Stake: {props.stake}</strong></p>
    </Aux>
    )
};

export default orderSummary;