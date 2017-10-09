function getFactorial(f){
    var n = parseInt(f);
    if((n < 0 || f != n)){
        return NaN;
    }
    else if(n == 0){
        return 1;
    }
    else {
        return n * getFactorial(n - 1);
    }
}

function fib(f) {
    //Fn = Fn-1 + Fn-2
    if(f <= 1){
        return f;
    }
    else {
        return fib(f - 1) + fib(f - 2);
    }
}

function multTable(n) {
    for (var i = 1; i <= 10; i++){
        var x = n * i;
        console.log(n + " * " + i + " = " + x);
    }
	return alert("Смотри в консоль браузера!");
}



