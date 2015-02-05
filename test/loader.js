define([ 'intern!tdd',
    'intern/chai!expect',
    '../pointerevents.dev'
   ],
   function (tdd, expect) {
       with (tdd) {

suite('Loader', function() {
  test('PointerEvent', function() {
    expect(PointerEvent).to.be.ok;
  });
  suite('PointerEventsPolyfill modules', function() {
    var pep = window.PointerEventsPolyfill;
    test('PointerEventsPolyfill', function() {
      expect(pep).to.be.ok;
    });
    test('PointerMap', function() {
      expect(pep.PointerMap).to.be.ok;
    });
    test('Dispatcher', function() {
      expect(pep.dispatcher).to.be.ok;
    });
    test('Installer', function() {
      expect(pep.Installer).to.be.ok;
    });
    test('Target Finding', function() {
      expect(pep.targetFinding).to.be.ok;
    });
  });
});


}
});
