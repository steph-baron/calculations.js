function zero(fn) {
  if (fn) {
  } else {
    console.log(0);
  }
}
zero();


function one(fn) {
  if(fn) {
    return fn(1)
  } else {
    return 1
  }
}
one();

function two(fn) {
  if (fn) {
    return fn(2)
  } else {
    return 2
  }
}
two();

function three(fn) {
  if (fn) {
    return fn(3)
  } else {
    return 3
  }
}
three();


function four(fn) {
  if (fn) {
    return fn(4)
  } else {
    return 4
  }
}
four();


// function five(plus(three()));


// function six() {}


// function seven() {}


// function eight() {}


// function nine() {}


function plus(num) {
  return function (num2){
   return num+num2
  }
}

three(plus(three()))

// function minus() {}


// function times() {}


// function dividedBy() {}
