# hasprop

Checks if property exists

# Install

```bash
npm install hasprop
```

# Usage

```javascript
var hasProp = require('hasprop');

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

hasProp(foo, 'bar') // true
hasProp(foo, 'foo') // false
hasProp(foo, 'bar.baz') // true
hasProp(foo, 'bar.baz.grault') // false
hasProp(foo, 'fred') // true
hasProp(foo, 'bar.garphly.0') // true
hasProp(foo, 'bar.garphly.0.a') // true
hasProp(foo, 'bar.baz.garphly.1') // false
hasProp(foo, 'bar.baz.corge.garphly.5') // false
hasProp(foo, 'bar.baz.c.1') // true
hasProp(foo, 'bar.baz.c.2') // false
```

# License

MIT
