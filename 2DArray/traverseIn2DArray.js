//You are given an arraymatrixofnrows andmcolumns which
// contains lower case English letters.
//
// How many times does the phrase "saba" appear horizontally,
// vertically, and diagonally in the grid?

let matrix=[[3, 2, 1],[2, 2, 2],[1, 5, 1]];
let n=matrix.length, m=matrix[0].length;
console.log(matrix);


let count=0, s=6;
function countStr(str){
    let counts=0;
    for(let i=0; i<str.length; i++){
        let basta="";
        for(let j=i; j<(i+4); j++){
            if(str[j]==undefined){
                break;
            }else{
                basta+=str[j];
            }
        }
        if(basta=="saba"){
            counts++;
        }
    }
    return counts;
}

for(let i=0; i<n; i++){
    let bag="";
    for(let j=0; j<m; j++){
        bag+=matrix[i][j];
    }
    count+=countStr(bag);
}
// console.log("Count1",count);

for(let i=0; i<m; i++){
    let bag="";
    for(let j=0; j<n; j++){
        bag+=matrix[j][i];
    }
    count+=countStr(bag);
}
// console.log("Count2",count);

for(let a=(-m+1); a<n; a++){
    let bag="";
    for(let i=0; i<n; i++){
        for(let j=0; j<m; j++){
            if(i-j==a){
                bag+=matrix[i][j];
            }
        }
    }
    count+=countStr(bag);
}

// console.log("Count3",count);
for(let a=0; a<=(n+m); a++){
    let bag="";
    for(let i=n-1; i>=0; i--){
        for(let j=0; j<m; j++){
            if(i+j==a){
                bag+=matrix[i][j];
            }
        }
    }
    count+=countStr(bag);
}
console.log(count);
