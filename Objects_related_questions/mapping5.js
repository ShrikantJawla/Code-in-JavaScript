//ou are given a number stored in a variable with the nameN
//
// You have to map the following symbols starting from the valueN
//
// The mapping is such that the difference between the values of two characters, is 2
//
// '!','@','#','$','%','^','&','*'

let symbols="!@#$%^&*";
let N=10, obj={};
for(let i=0,j=0; i<symbols.length; i++,j+=2){
    obj[symbols[i]]=N+j;
}
for(let i in obj){
    console.log(i+"-"+obj[i]);
}