# hasprop

Check if object has property, the easy way.

Antiquated way:

```javascript
var exists = Boolean(
  obj &&
  obj.qux &&
  obj.qux.zee &&
  obj.qux.zee.peep &&
  obj.qux.zee.peep[2] &&
  obj.qux.zee.peep[2].__data);
```

with getProp:

```javascript
var exists = hasProp(obj, ['qux', 'zee', 'peep', 2, '__data']);
```

# Install

```bash
npm install hasprop
```

# Usage

```javascript
var hasProp = require('hasprop');

var obj = {
  foo: 'bar',
  qux: {
    zee: {
      boop: 4,
      peep: [55,'zonk', {
        __data: 'pow'
      }],
    },
    'key.with.dots': 'hello',
    '"key.with.quotes"': {
      greet: 'hi'
    },
    $el: 'element'
  },
  'foo.bar': 'noob',
  qax: null
};

// array for path (recommended)
getProp(obj, ['foo']) // true
getProp(obj, ['deedee']) // false
getProp(obj, ['qux', 'zee', 'boop']) // true
getProp(obj, ['qux', 'zee', 'peep', 0]) // true
getProp(obj, ['qux', 'zee', 'peep', 1]) // true
getProp(obj, ['qux', 'key.with.dots']) // true
getProp(obj, ['qux', '"key.with.quotes"', 'greet']) // true
getProp(obj, ['qux', 'zee', 'peep', 2]) // true
getProp(obj, ['qux', 'zee', 'peep', 2, '__data']) // true
getProp(obj, ['qux', '$el']) // true
getProp(obj, ['foo.bar']) // true
getProp(obj, ['qux', 'qux']) // false

// string for path
getProp(obj, 'foo') // true
getProp(obj, 'deedee') // false
getProp(obj, 'qux.zee.boop') // true
getProp(obj, 'qux.zee.peep.0') // true
getProp(obj, 'qux.zee.peep.1') // true
getProp(obj, 'qux.zee.peep[1]') // true
getProp(obj, 'qux[key.with.dots]') // true
getProp(obj, 'qux["key.with.quotes"].greet') // true
getProp(obj, 'qux.zee.peep.2') // true
getProp(obj, 'qux.zee.peep.2.__data') // true
getProp(obj, 'qux.$el') // true
getProp(obj, '[foo.bar]') // true
getProp(obj, 'qux.qux') // false
```

Partially applied:

```
var objHasProp = hasProp(obj);

objHasProp(['foo']) //  true
objHasProp('[foo.bar']) // true
objHasProp(['qux']) // true
objHasProp(['yo']) // false
```

For actually retrieving the value, check out the module [getprop](https://github.com/miguelmota/getprop).

# License

MIT
