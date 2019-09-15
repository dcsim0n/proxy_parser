/*
 * Parse freeproxylist.org web pages
 * Dana Simmons 2019
 * based on code from https://rmccurdy.com/scripts/PupProxyCheck/freeproxylists.js
*/
const buildDOM = require('./buildDOM.js');

const URL = 'http://www.freeproxylists.com/elite/d1568550623.html'


function domquery( dom ){
  // Freproxy loads data into #dataID div
  const data = dom.window.document.getElementById('dataID')
  console.log("Got data of length: ", data.innerHTML.length);
  // If the data didn't load abort
  if ( data.innerHTML.length < 10 ) {
    throw Error("Didn't get any data");
  }
  
  const rows = data.querySelectorAll('tr');
  console.log('Number of rows: ', rows.length);
  let proxyRows = []
  rows.forEach(row => {
    if(row.children[0].innerHTML.match(/\d+\.\d+\.\d+\./)){
      proxyRows.push(row)
    }
  });
  // the ip of each proxy is child 0, the port is child [1]
  const proxyStrings = proxyRows.map( row => `${row.children[0].innerHTML}:${row.children[1].innerHTML}` );
  
  console.log("Parsed ", proxyStrings.length, " proxies");
  console.log("First 5 proxies", proxyStrings.slice(0,5));
  
  return proxyStrings;
}


// Load the page in JSDOM then wait a few seconds for the page to execute before parsing
buildDOM(URL).then( dom => setTimeout( ()=> domquery(dom), 4000));
