const { JSDOM } = require('jsdom');

function domquery( dom ){

  //const rows = dom.window.document.getElementById('dataID').querySelectorAll("tr");
  console.log("dataID: ", dom.window.document.getElementById('dataID').innerHTML) 
  const data = dom.window.document.getElementById('dataID').innerHTML;
  console.log("Got data of length: ", data.length);
  
  if ( data.length < 10 ) {
    throw Error("Didn't get any data");
  } 
  const table = new JSDOM(data);
  
  const rows = table.window.document.querySelectorAll('tr'); 
  console.log('Got rows: ',rows[3].children[0].innerHTML);
  let proxyRows = []
  rows.forEach(row => {
    if(row.children[0].innerHTML.match(/\d+\.\d+\.\d+\./)){                                                                 proxyRows.push(row)
    }
  });
  console.log("Proxies: ",proxyRows);
  
  const proxyStrings = proxyRows.map( row => `${row.children[0].innerHTML}:${row.children[1].innerHTML}` );
  console.log("Parsed ", proxyStrings.length, " proxies");
}

module.exports = domquery;

