import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import Aux from '../../hoc/Aux/Aux';
import BuildControl from '../../components/BuildControl/BuildControl';
import BetNow  from '../../components/BetNow/BetNow';
import Modal from '../../components/UI/Modal/Modal';
import Filter from '../../components/UI/Filter/Filter';
import OrderSummary from '../../components/OrderSummary/OrderSummary';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import * as actions from '../../store/actions/actions';
import './Betslip.css';

export const betslip = props => {

    const [totalPrice, setTotalPrice] = useState(0);
    const [purchaseable, setPurchaseable] = useState(false);
    const [purchasing, setPurchasing] = useState(false);
    const [value, setValue] = useState('');

    useEffect(() => {
        props.onFetchPlayers();       
    }, []);

    const updatePurchaseState = (updatedCount) => {
        setPurchaseable(updatedCount > 0)
    }
    
    const addStakeHandler = () => {
        let inputs = document.querySelectorAll('[id="betValue"]');

        let totalVal=0
        for (let i = 0; i < inputs.length; i++) {
            totalVal  += inputs[i].value * 1
        }

        const updatedCount = totalVal;
        setTotalPrice(updatedCount)        
        updatePurchaseState(updatedCount);
    }

    const menuItemClickHandler = (event) => {
        const updatedFilter = event.target.value;
        if (updatedFilter === "playersMoreThanTwo") {
            props.onFetchPlayersMoreThan();         
            setValue('playersMoreThanTwo')
        }
        if (updatedFilter === "playersLessThanTwo") {
            props.onFetchPlayersLessThan();
            setValue('playersLessThanTwo')
        }
    }

    const purchaseHandler = () => {
        setPurchasing(true);
    }

    const purchaseCompleteHandler = () => {
        setPurchasing(false);
    }

    let players = <p>Something went wrong!</p>;
    
    if (!props.error) {
        players = props.players.map((player, index) => 
        <Aux key={index}>
            <div className="betslip">
                {player.odds.map(odd => {                
                    return ( 
                    <BuildControl 
                        betName={player.name} 
                        bestOddsDecimal={odd.oddsDecimal}   
                        key={odd.bookmakerBetId} 
                        value={value}
                        changed={addStakeHandler} />
                )})}
            </div>
            <br />
        </Aux>
    );
    }

    return (
        <Aux>
            <Modal show={purchasing} modalClosed={purchaseCompleteHandler} >
                <OrderSummary  
                    stake={totalPrice} />
            </Modal>

            <Filter
                value={value}
                changed={(event) => menuItemClickHandler(event)} />
            
            {players} 

            <BetNow 
                stake={totalPrice} 
                purchaseable={purchaseable}
                placedBet={purchaseHandler} />          
        </Aux>
    );
}

const mapStateToProps = state => {
    console.log(state);
    return {
        players: state.players,
        playersMoreThanTwo: state.playersMoreThanTwo,
        playersLessThanTwo: state.playersLessThanTwo,
        error: state.error
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onFetchPlayers: () => dispatch( actions.fetchPlayers() ),
        onFetchPlayersMoreThan: () => dispatch( actions.fetchPlayersMoreThan() ),
        onFetchPlayersLessThan: () => dispatch( actions.fetchPlayersLessThan() )
    };
};

export default connect( mapStateToProps, mapDispatchToProps )(withErrorHandler(betslip, axios));