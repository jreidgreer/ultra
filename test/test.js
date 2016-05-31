describe('Ultra DOM Manipulation', function() {
  it('Can find and store reference to a class', function() {
    var test = ultra('.test');
    expect(test._domRef).to.be.an('object');
  });

  it('Can find and store reference to a ID', function() {
    var test = ultra('#test');
    expect(test._domRef).to.be.an('object');
  });

  it('Can store a collection of elements by class', function() {
    var test = ultra('.test_multiple');
    expect(test._domRef).to.be.an('array');
  });
});