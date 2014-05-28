function readFileByLine(filename, lineCallback, endCallback) {
  var rd = require('readline').createInterface({
    input: require('fs').createReadStream(filename),
    output: process.stdout,
    terminal: false
  })
  rd.on('line', lineCallback);
  rd.on('close', endCallback);
}

var depObj = {};
var last = null;
readFileByLine(process.argv[2],
  function(line) {
    var l = line.trim();
    if (l.indexOf('-<') !== 0) {
      if (!(l in depObj)) {
        depObj[l] = [];
        last = l;
      }
    } else {
      l = l.replace('-<', '').trim();
      depObj[last].push(l);
    }
  },
  function() {
    console.log(depObj);
  });
