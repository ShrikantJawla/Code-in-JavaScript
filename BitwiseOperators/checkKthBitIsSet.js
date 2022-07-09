let num=45;
let k=3;

function checkKthBitIsSet(num,k){
    let i=1;
    i=i<<k;
    if(num&i!==0) return true;
    else return false;
}

let result=checkKthBitIsSet(num,k);
console.log(result);