class Cl {
  constructor() {
    _foo.add(this);
  }

  test() {
    return babelHelpers.classPrivateMethodGet(this, _foo, _foo2).call(this);
  }

}

var _foo = new WeakSet();

var _foo2 = async function _foo2() {
  return 2;
};
