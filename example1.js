function callback1(a,b,func){
    var t;
    console.log(t = a+b);
    func(t);
}

function func1(t){
  console.log('value printed from 1: '+t)
}

function func2(t){
    console.log('value printed from 2: '+ t)
}
callback1(3,4,func2);
