import * as actionTypes from '../actions/actions';

const initialState = {
    players: [],
    playersMoreThanTwo: [],
    playersLessThanTwo: [],
    error: false
};

const updateObject = (oldObject, updatedProperties) => {
    return {
        ...oldObject,
        ...updatedProperties
    };
};

const fetchPlayersStart = ( state, action ) => {
    return updateObject( state, { error: false } );
};

const fetchPlayersSuccess = ( state, action ) => {
    return updateObject( state, {
        players: action.players,
        playersMoreThanTwo: action.playersMoreThanTwo,
        playersLessThanTwo: action.playersLessThanTwo,
        error: false
    } );
};

const fetchPlayersFail = ( state, action ) => {
    return updateObject( state, { error: true } );
};

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.FETCH_PLAYERS_START: return fetchPlayersStart( state, action );
        case actionTypes.FETCH_PLAYERS_SUCCESS: return fetchPlayersSuccess( state, action );
        case actionTypes.FETCH_PLAYERS_FAIL: return fetchPlayersFail( state, action );
        default: return state;
    }
};

export default reducer;