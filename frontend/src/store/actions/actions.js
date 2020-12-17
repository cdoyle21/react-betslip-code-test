import axios from 'axios';

export const FETCH_PLAYERS_START = 'FETCH_PLAYERS_START';
export const FETCH_PLAYERS_SUCCESS = 'FETCH_PLAYERS_SUCCESS';
export const FETCH_PLAYERS_FAIL = 'FETCH_PLAYERS_FAIL';

export const fetchPlayersSuccess = ( players, playersMoreThanTwo, playersLessThanTwo ) => {
    return {
        type: FETCH_PLAYERS_SUCCESS,
        players: players,
        playersMoreThanTwo: playersMoreThanTwo,
        playersLessThanTwo: playersLessThanTwo
    };
};

export const fetchPlayersFail = ( error ) => {
    return {
        type: FETCH_PLAYERS_FAIL,
        error: error
    };
};

export const fetchPlayersStart = () => {
    return {
        type: FETCH_PLAYERS_START
    };
};

export const fetchPlayers = () => {
    return dispatch => {
        dispatch(fetchPlayersStart());
        axios.get('/decimalOdds')
            .then(response => {
                const players = response.data;
            
                dispatch(fetchPlayersSuccess(players));
            })
            .catch( err => {
                dispatch(fetchPlayersFail(err));
            } );
        };
};

export const fetchPlayersMoreThan = () => {
    return dispatch => {
        dispatch(fetchPlayersStart());
        axios.get('/decimalOddsMoreThanTwo')
            .then(response => {
                const playersMoreThanTwo = response.data;
            
                dispatch(fetchPlayersSuccess(playersMoreThanTwo));
            })
            .catch( err => {
                dispatch(fetchPlayersFail(err));
            } );
        };
};

export const fetchPlayersLessThan = () => {
    return dispatch => {
        dispatch(fetchPlayersStart());
        axios.get('/decimalOddsLessThanTwo')
            .then(response => {
                const playersLessThanTwo = response.data;
            
                dispatch(fetchPlayersSuccess(playersLessThanTwo));
            })
            .catch( err => {
                dispatch(fetchPlayersFail(err));
            } );
        };
};