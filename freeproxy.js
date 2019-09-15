

//Query for data with:

const parsedom = require('./fp/jsdom');
const domquery = require('./fp/domquery');



parsedom().then( dom => setTimeout( ()=> domquery(dom), 4000));
