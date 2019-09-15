

//Query for data with:
const rows = document.getElementById('dataID').querySelectorAll("tr");

let proxyRows
rows.forEach(row => {
  if(row.children[0].innerText.match(/\d+\.\d+\.\d+\./)){
    proxyRows.push(row)
  }})

let proxies = proxyTr.map( (row) => `${row.children[0].innerText}:${row.children[1].innerText}`)
