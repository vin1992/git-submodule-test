console.log('hello world');


function baz() {
  return 'aaaaa';
}


function foo() {
  return false;
}

function isTypeOf(o) {
  var str = Object.prototype.toString.call(o);
  return str.substr(8, str.length - 9);
}

function hello() {
  console.log('hello world aaaa');
}

function yoyo() { }

function ddd() { }