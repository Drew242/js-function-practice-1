var tripleFive = function() {
  for (i = 0; i < 3; i++) {
    console.log("Five!");
  }
}
tripleFive();

var lastLetter = function(string){
  console.log(string[(string.length - 1)])
}

lastLetter('island');

var square = function(n) {
  console.log(n * n);
}

square(3);

var negate = function(n) {
  console.log(-n);
}

negate(5);

var startsWithA = function(word) {
  if (word[0] == 'a' || word[0] == 'A') {
    console.log(true)
  } else {
    console.log(false)
  }
}

startsWithA('aardvark');
startsWithA('bumblebee');
startsWithA('Alligator');

var excite = function(word) {
  console.log(word + '!!!')
}

excite('yes');

var sun = function(word) {
  if (word.indexOf('sun') >= 0) {
    console.log(true)
  } else {
    console.log(false)
  }
}

sun('sundial');
sun('July');

var tiny = function(n) {
  if (n > 0 && n < 1) {
    console.log(true)
  } else {
    console.log(false)
  }
}

tiny(0.5);
tiny(1.1);

var getSeconds = function(time) {
  var minutesToSeconds = parseInt(time.split(':')[0]) * 60;
  var seconds = parseInt(time.split(':')[1]);
  console.log(minutesToSeconds + seconds)
}

getSeconds('01:30');
getSeconds('10:25');
