// Basic DOM manipulation library

var ultra = function(input) {
  var ultraInstance = function() {
    this._domRef;
    this.eventStorage;

    if(input.charAt(0) === '.') {
      _domRef = document.getElementsByClassName(input.slice(1));
      // If refering to only a single element, remove from array
      _domRef = _domRef.length === 1 ? _domRef[0] : _domRef;
    } else if(input.charAt(0) === '#') {
      _domRef = document.getElementById(input.slice(1));
    } else {
      _domRef = document.createElement(input);
    }
  };

  ultraInstance.prototype.click = function(callback) {
    this.eventStorage.click = !this.eventStorage.click ? this.eventStorage.click = [] : this.eventStorage.click;
    this.eventStorage.click.push(callback);
  };

  return ultraInstance;
}