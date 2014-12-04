(function(){


  function hasprop(o, s) {
    if (!o || !s) return false;
    if (!(typeof o === 'object' || o instanceof Object)) return false;
    if (!(typeof s === 'string' || s instanceof String)) return false;
    var props = s.split('.'),
        last = props[props.length - 1],
        i = 0,
        head = o;

    for (i = 0; i < props.length; i += 1) {
      if (!head[props[i]]) return false;
      head = head[props[i]];
      if (typeof head !== 'undefined') {
        if (props[i] === last) {
          return true;
        }
      }
    }

    return false;
  }

  if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    module.exports = hasprop;
  } else if (typeof exports !== 'undefined') {
    exports.hasprop = hasprop;
  } else {
    window.hasprop = hasprop;
  }

})();
