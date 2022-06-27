//You are given a number stored in a variable with the nameN
//
// You are given another number stored in a variable with the nameK
//
// You have to map all the numbers in the range of[1, N], including the values stored inN, such that the mapping begins fromK
//
// For example, consider the value stored inN = 5, andK = 10, then the required output will be
//
// 1-10
// 2-11
// 3-12
// 4-13
// 5-14

let obj={}, S=10, N=5;
for(let i=1; i<=5; i++){
    obj[i]=S+i-1;
}
for(let i in obj){
    console.log(i+"-"+obj[i]);
}
