describe('Ultra DOM Manipulation', function() {
  it('Can find and store reference to a class', function() {
    var test = ultra('.test');
    console.log('test', typeof test.ref());
    expect(test.ref()).to.be.an('object');
  });

  it('Can find and store reference to a ID', function() {
    var test = ultra('#test');
    expect(test.ref()).to.be.an('object');
  });

  it('Can store a collection of elements by class', function() {
    var test = ultra('.test_multiple');
    expect(test.ref()).to.be.an('array');
  });
});