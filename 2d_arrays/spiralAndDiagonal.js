let q=[1,2,3,4,8,12,16,15,14,13,9,5,6,7,11,10];
let arr=[[1,2,3,4],[8,12,16,15],[14,13,9,5],[6,7,11,10]];
let rf=0, rl=arr.length, cf=0, cl=arr[0].length;
let k=0;
while(rf<rl && cf<cl){
    for(let i=cf; i<cl; i++){
        arr[rf][i]=q[k++];
    }
    rf++;
    for(let i=rf; i<rl; i++){
        arr[i][cl-1]=q[k++];
    }
    cl--;
    if(rf<rl){
        for(let i=cl-1; i>=cf; i--){
            arr[rl-1][i]=q[k++];
        }
        rl--;
    }
    if(cf<cl){
        for(let i=rl-1; i>=rf; i--){
            arr[i][cf]=q[k++];
        }
        cf++;
    }
}
console.log(arr)

// let q=[1,2,3,4,8,12,16,15,14,13,9,5,6,7,11,10];
// let arr= new arr(n);
// arr[1][3]=3;
// console.log(arr);