let arr=[[1,2,3,45,36],
         [4,5,6,23,77],
         [7,8,9,78,22],
         [10,11,12,89,44]];
let N=arr.length, M=arr[0].length;
let rf=1, rl=arr.length-1, cf=1, cl=arr[0].length-1, res=[], count=0;

while( count<( (N*M) - (2*M)- 2*(N-2)  )  ){
    for(let i=rl-1; i>=rf && count<( (N*M) - (2*M)- 2*(N-2)  ); i--){
        res.push(arr[i][cf]);
        count++;
    }
    cf++;

    for(let i=cf; i<cl && count<( (N*M) - (2*M)- 2*(N-2)  ); i++){
        res.push(arr[rf][i]);
        count++;
    }
    rf++;

    for(let i=rf; i<rl && count<( (N*M) - (2*M)- 2*(N-2)  ); i++){
        res.push(arr[i][cl-1]);
        count++;
    }
    cl--;

    for(let i=cl-1; i>=cf && count<( (N*M) - (2*M)- 2*(N-2)  ); i--){
        res.push(arr[rl-1][i]);
        count++;
    }
    rl--;

}
console.log(res.join(" "));
