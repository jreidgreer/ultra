// Basic DOM manipulation library

var ultra = function(input) {
  var _domRef;
  var eventStorage;

  if(input.charAt(0) === '.') {
    _domRef = document.getElementsByClassName(input.slice(1));
    // If refering to only a single element, remove from array
    _domRef = _domRef.length === 1 ? _domRef[0] : _domRef;
  } else if(input.charAt(0) === '#') {
    _domRef = document.getElementById(input.slice(1));
  } else {
    _domRef = document.createElement(input);
  }

  var ultraInstance = function() {
  };

  ultraInstance.click = function(callback) {
    eventStorage.click = !eventStorage.click ? eventStorage.click = [] : eventStorage.click;
    eventStorage.click.push(callback);
  };

  ultraInstance.ref = function() {
    return _domRef;
  };


  return ultraInstance;
}