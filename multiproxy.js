/*
 * 2019 Dana Simmons, based on code from 
 * https://rmccurdy.com/scripts/PupProxyCheck/multiproxy.js
 *
*/
const request = require('request');

const URL = "http://multiproxy.org/cgi-bin/search-proxy.pl";

request(URL, ( err, resp, body ) => {
  console.log(`Got ${body.length} number of characters`);
  
  const lines = body.split('<br>');
  //const lines = breaks.split('\n');

  console.log("Parsing ", lines.length, " number of lines");
  console.log(lines[200]);
  const proxies = lines.filter(( line ) => {
    return line.match(/\d+\.\d+\.\d+\.\d+:\d+/)
  });
 
 
   
  console.log(proxies);
});
