import React from 'react';

import './Filter.css';

const filter = (props) => (
    <div className="filter">
        <strong>Betslip</strong>
        <select onChange={props.changed} value={props.value}>
            <option value="filter">Filter</option>
            <option value="playersMoreThanTwo">More Than 2</option>
            <option value="playersLessThanTwo">Less Than 2</option>
        </select>
    </div>
);

export default filter;