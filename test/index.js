var test = require('tape');
var abnfAST = require('../');

var fs = require('fs');
var path = require('path');

test('RFC 5234', function (t) {
  var filename = 'rfc5234.abnf';
  var abnf = fs.readFileSync(path.join(__dirname, filename)).toString();
  var ast = abnfAST.parse(abnf);
  t.ok(ast, 'parsed ' + filename);
  t.equal(ast.type, 'rulelist', 'is a rulelist');
  t.equal(ast.rules.length, 37, 'has 37 rules');
  t.end();
});
