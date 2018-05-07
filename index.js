console.log('hello world');


function foo() {
  return false;
}

function isTypeOf(o) {
  var str = Object.prototype.toString.call(o);
  return str.substr(8, str.length - 9);
}




