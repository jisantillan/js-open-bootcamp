var i = 1;
var res = 1;
while (true) {
    if(i===10){
        res = res * i;
        break;
    }
    res = res * i;
    i++;
}

console.log(res);