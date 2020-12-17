import React from 'react';
import PropTypes from "prop-types";

import './BuildControl.css';

const buildControl = ( props ) => (
    <div className="buildControl">
        <div className="label">{props.betName}</div>
        <div className="label">{props.bestOddsDecimal}</div>
        <input type="number" id="betValue" onBlur={props.changed} />
    </div>
)

buildControl.propTypes = {
    value: PropTypes.any,
    onChange: PropTypes.func
  };
  
export default buildControl;