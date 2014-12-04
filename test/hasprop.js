var test = require('tape');
var hasProp = require('../hasprop');

test('has prop', function (t) {
  t.plan(15);

  var foo = {
    bar: {
      baz: {
        qux: 'corge',
        c: [1,2]
      },
      garphly: [{a:'b'}]
    },
    fred: 'plugh'
  };

  t.equal(hasProp(), false);
  t.equal(hasProp(''), false);
  t.equal(hasProp(foo, ''), false);
  t.equal(hasProp('{}'), false);
  t.equal(hasProp(foo, 'bar'), true);
  t.equal(hasProp(foo, 'foo'), false);
  t.equal(hasProp(foo, 'bar.baz'), true);
  t.equal(hasProp(foo, 'bar.baz.grault'), false);
  t.equal(hasProp(foo, 'fred'), true);
  t.equal(hasProp(foo, 'bar.garphly.0'), true);
  t.equal(hasProp(foo, 'bar.garphly.0.a'), true);
  t.equal(hasProp(foo, 'bar.baz.garphly.1'), false);
  t.equal(hasProp(foo, 'bar.baz.corge.garphly.5'), false);
  t.equal(hasProp(foo, 'bar.baz.c.1'), true);
  t.equal(hasProp(foo, 'bar.baz.c.2'), false);
});
