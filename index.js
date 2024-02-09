function receivesAFunction(spy) {
  console.log('receives a function and call it Spy');
  spy(); // calling the spy function
}

function returnsANamedFunction(fn) {
  function namedFunction() {
  }


  return namedFunction;
}

function returnsAnAnonymousFunction(fn) {
  return function() {
    AnonymousFunction
  };
}