let num=16;

function powerOfTwo(num){
    if((num & (num-1))==0) return true;
    else return false;
}

console.log(powerOfTwo(num));