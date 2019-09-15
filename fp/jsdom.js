
const jsdom = require('jsdom');

const url = 'http://www.freeproxylists.com/elite/d1568550623.html';

function parsedom(){
  return jsdom.JSDOM.fromURL(url, { runScripts: "dangerously" , resources: "usable",  pretendToBeVisual: true })
}

module.exports = parsedom;

