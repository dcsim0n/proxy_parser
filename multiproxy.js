/*
 * 2019 Dana Simmons, based on code from 
 * https://rmccurdy.com/scripts/PupProxyCheck/multiproxy.js
 *
*/
const buildDOM = require('./buildDOM');

const URL = "http://multiproxy.org/cgi-bin/search-proxy.pl";


function querydom( dom ){
  
  const main = dom.window.document.querySelectorAll('center')[1];
  console.log("Captured data of length: ", main.textContent.length);

  const lines = main.textContent.split('\n');
  console.log("Split into ", lines.length, " lines");

  const proxies = lines.filter(( line ) => {
    return line.match(/^\d+\.\d+\.\d+\.\d+:\d+$/)
  })
  
  console.log("Parsed ", proxies.length, " proxies");
  console.log("First 5 ", proxies.slice(0,5));

  return proxies;

}

buildDOM( URL ).then( dom => querydom( dom ));
