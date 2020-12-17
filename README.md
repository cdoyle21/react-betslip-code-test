# OddsChecker Betslip

A Betslip application using javascript, react and redux on the frontend. Obtains data from API to show competitors and their odds, allows user to enter a stake for each bet, provides them total stake entered and displays a receipt once final bet is made<br>
The server folder implements a static express server which is required to obtain the two endpoints - /decimalOddsLessThanTwo and /decimalOddsMoreThanTwo. 


## How to Install and run
1. `git clone https://github.com/cdoyle21/react-betslip-code-test.git`
2. `cd react-betslip-code-test`
3. `npm i`
4. `npm run start-server`
5. Open a new terminal window, navigate to the same directory, then
6. `cd frontend`
7. `npm start`

## Testing

To run tests created:

`cd react-betslip-code-test/frontend`<br>
`npm test`