//ou are given a number stored in a variable with the nameN
//
// You have to print the first N English smaller case alphabets, mapped with the values starting from 1 toN, including the value stored inN
//
// For example, consider the value stored inN = 3, then the required output will be
//
// a-1
// b-2
// c-3
// Note : The value stored in N will always be less than or equal to 26, and greater than 0

let letters="abcdefghijklmnopqrstuvwxyz";
let obj={}, N=5;

for(let i=0; i<letters.length; i++){
    obj[letters[i]]=i+1;
}

for(let i=0; i<N; i++){
    console.log(letters[i]+"-"+obj[letters[i]]);
}
