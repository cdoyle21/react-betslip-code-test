import reducer from './reducers';
import * as actionTypes from '../actions/actions';

describe('reducer tests', () => {
    it('should return the initial state', () =>{
        expect(reducer(undefined, {})).toEqual({
            players: [],
            playersMoreThanTwo: [],
            playersLessThanTwo: [],
            error: false
        });
    })

    it('should store players, playersMoreThanTwo, playersLessThanTwo', () => {
        expect(reducer({
            players: [],
            playersMoreThanTwo: [],
            playersLessThanTwo: [],
            error: false
        }, {
            type: actionTypes.FETCH_PLAYERS_SUCCESS,
            players: 'some-players',
            playersMoreThanTwo: 'some-playersMoreThanTwo',
            playersLessThanTwo: 'some-playersLessThanTwo'
        })).toEqual({
            players: 'some-players',
            playersMoreThanTwo: 'some-playersMoreThanTwo',
            playersLessThanTwo: 'some-playersLessThanTwo',
            error: false
        })
    })

    it('should store errors', () => {
        expect(reducer({
            players: [],
            playersMoreThanTwo: [],
            playersLessThanTwo: [],
            error: false
        }, {
            type: actionTypes.FETCH_PLAYERS_FAIL,
            error: 'some-error'
        })).toEqual({
            players: [],
            playersMoreThanTwo: [],
            playersLessThanTwo: [],
            error: true
        })
    })
});