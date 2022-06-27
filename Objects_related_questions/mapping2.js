//You are given a number stored in variable with the nameN
//
// You have to map all the lowercase English characters, to a number starting from the value stored inN,
// and incrementing it by 1 at every step

let letters="abcdefghijklmnopqrstuvwxyz";
let obj={}, N=30;
for(let i=0; i<letters.length; i++){
    obj[letters[i]]=(N+i);
    console.log(letters[i]+"-"+obj[letters[i]]);
}