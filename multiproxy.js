

const jsdom = require('jsdom');
const { JSDOM } = jsdom;

const URL = "http://multiproxy.org/cgi-bin/search-proxy.pl";

JSDOM.fromURL(URL)
.then( dom => {
  const body =  dom.window.document.querySelector("center");
  console.log(body);
  console.log("Got ",body.length," number fo charachters");

  //document.querySelectorAll("center")[1].innerText.split('\n');

  const lines = body.split('\n');

  console.log("Parsing ", lines.length, " number of lines");

  lines.filter(( line ) => {
    return line.match(/\d+\.\d+\.\d+\.\d+\.:\d+/)
  });
});
