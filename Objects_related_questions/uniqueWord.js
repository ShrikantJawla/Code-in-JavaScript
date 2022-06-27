//Given a string , find the new string that will be the concatenation of unique character (whose occurrence is 1 ) in the original string.

let str="amsterdam";
let obj={}, arr=[];
for (let i=0; i<str.length; i++) {
    if (obj[str[i]] == undefined) {
        obj[str[i]]=1;
    }else{
        obj[str[i]]++;
    }
}
for(let i in obj){
    if(obj[i]==1){
        arr.push(i);
    }
}
    console.log(arr.join(""));
