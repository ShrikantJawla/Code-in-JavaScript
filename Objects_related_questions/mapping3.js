//You are given a number stored in a variable with the nameN
//
// You are also, given a string, whose length is stored in a variable with the nameK,
// and the string is stored in a variable with the namestr
//
// You have to map all lower case English characters, starting from the value stored inN.
//For example, if the value stored instr = "abc", then the required output will be
//
// 30 + 31 + 32 = 93, which is the required output

let letters="abcdefghijklmnopqrstuvwxyz";
let obj={}, str="abc", N=30;
for(let i=0; i<letters.length;i++){
    obj[letters[i]]=i+N;
}
let sum=0;
for(let i in str){
    sum+=obj[str[i]];
}
console.log(sum);

