//Result or Tie - Tic Tac Toe -25:49:57
// Description
//
// You are given a 3 * 3matrix(2d-array) that represents the final situation of a Tic Tac Toe.
//
// Your task is to write a program that finds out the winner in case the match ended in a win.
// If the winner is 'x', print "x".
//
// If the winner is 'o', print "o".



function ticTacToe(matrix){
    let R=matrix.length;
    for(let i=0; i<R; i++){
        let x=0, o=0;
        for(let j=0; j<R; j++){
            if(matrix[i][j]=="x"){
                x++;
            }else{
                o++;
            }
            if(x==3){
                console.log("x");
            }
            else if(o==3){
                console.log("o");
            }
        }
    }

    for(i=0; i<R; i++){
        let x=0, o=0;
        for(let j=0; j<R; j++){
            if(matrix[j][i]=="x"){
                x++;
            }else{
                o++;
            }
            if(x==3){
                console.log("x");
            }
            else if(o==3){
                console.log("o");
            }
        }
    }

    let x=0, o=0;
    for(let i=0; i<R; i++){
        for(let j=0; j<R; j++){
            if(i-j==0){
                if(matrix[i][j]=="x"){
                    x++;
                }else{
                    o++;
                }
            }
        }
    }
    if(x==3){
        console.log("x");
    }
    else if(o==3){
        console.log("o");
    }

    x=0, o=0;
    for(let i=0; i<R; i++){
        for(let j=0; j<R; j++){
            if((i+j)==(R-1)){
                if(matrix[i][j]=="x"){
                    x++;
                }else{
                    o++;
                }
            }
        }
    }
    if(x==3){
        console.log("x");
    }
    else if(o==3){
        console.log("o");
    }

}

let matrix=[["x","x","x"],
            ["o","x","x"],
            ["0","x","o"]];
ticTacToe(matrix);