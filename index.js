function theBeatlesPlay(musicians, instruments) {
  var x = []; 
  for (let n=0; n < musicians.length; n++) {
    x.push("${musicians[n]} plays ${instruments[n]}");
    return x;
  }
}

function johnLennonFacts(facts) {
  var x2 = [];
  f=0;
  while (f<facts.length) {
    x2.push("${facts[f]}!!!");
    f++;
  }
  return x2;
}

function iLoveTheBeatles(number) {
  var x3 = [];
  var number=0;
  do {
    x3.push("I love the Beatles!");
    number++;
  }
  while (number<15);
}