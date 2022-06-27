let arr=[2,5,4,5,4,8,6,8,6,4,2,5,8,7,5,6,3,2,1,4,8,6,2,58,6,5,45,85,85];
let arr1=[2,5,4,5,4,8,6,8,6,4,2,5,8,7,5,6,3,2,1,4,8,6,2,58,6,5,45];
let obj1={},obj2={}, newarr=[], newarr1=[];
for(let i=0; i<arr.length; i++){
    if(obj1[arr[i]]== undefined){
        obj1[arr[i]]=1;
        newarr.push(arr[i]);
    }
    if(obj2[arr1[i]] == undefined){
        obj2[arr1[i]]=1;
        newarr1.push(arr1[i]);
    }
}
console.log(newarr, newarr1);


