const express = require('express');
const app = express();
const cors = require('cors');
const data = require('./data/data.json');

app.use(cors());

const bets = data.bets;

function filterOptions (betsList, value, overTwo) {
  const filterBets = betsList.map(betsArray => {
    return {
      name: betsArray.name,
      odds: betsArray.odds.filter( x => overTwo === true ? x.oddsDecimal >= value : x.oddsDecimal < value) 
    }
  });

  return filterBets;
}

app.get('/decimalOdds', (req, res) => {
  res.json(bets);
});

app.get('/decimalOddsMoreThanTwo', (req, res) => {
    res.json(filterOptions(bets, 2, true).filter( competitor => competitor.odds.length > 0 ));
});

app.get('/decimalOddsLessThanTwo', (req, res) => {
    res.json(filterOptions(bets, 2, false).filter( competitor => competitor.odds.length > 0 ));
});

app.listen(4000, () => {
  console.log('Example app listening on port 4000!');
});