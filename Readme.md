# Proxy Parser example

*Based on code from: PupProxyCheckhttps://rmccurdy.com/scripts/PupProxyCheck*

Implements parsing for:
+ multiproxy.org
+ freeproxylists.com


## To run individual parsers
+ `node <name of parser.js>`

## Make it better?
Sites like freeproxylist use many pages to display their proxies. It is conceivable that these URLS could also be parsed and then crawled in a similar fasion as demonstrated in `freeproxy.js`. This would require building a queue for parsing from the urls
