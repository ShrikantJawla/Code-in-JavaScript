//This program is to traverse in 2D array spirally.

let arr = [[1,2,3,45,36],
           [4,5,6,23,77],
           [7,8,9,78,22],
           [10,11,12,89,44],
           [12,14,19,99,64]];

let rf=1, rl=arr.length-1, cf=1, cl=arr[0].length-1;
let bag="";

while(rf<rl && cf<cl){
    for(let i=rf; i<rl; i++){
        bag+=arr[i][cf]+" ";
    }
    cf++;

    for(let i=cf; i<cl; i++){
        bag+=arr[rl-1][i]+" ";
    }
    rl--;

    if(cf<cl){
        for(let i=rl-1; i>=rf; i--){
            bag+=arr[i][cl-1]+" ";
        }
        cl--;
    }
    if(rf<rl){
        for(let i=cl-1; i>=cf; i--){
            bag+=arr[rf][i]+" ";
        }
    }
    rf++;
}
console.log(bag);