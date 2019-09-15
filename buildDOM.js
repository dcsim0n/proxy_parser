
const { JSDOM } = require('jsdom');

function buildDOM( url ){
  return JSDOM.fromURL(url, {
    //DOM Options
      runScripts: 'dangerously', //execute scripts in page
      resources: 'usable',  //load external scripts and links
    });
}

module.exports = buildDOM;

