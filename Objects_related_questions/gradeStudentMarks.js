//- Given an object of student grades and their marks in the mentioned below format,
// print the highest scored student for each grade along with the total
// - Sample Input
let data=[
    {
        grade: "V",
        students: [
            {name: "Nrupul", marks: [10, 20, 30]},
            {name: "Prateek", marks: [20, 30, 40]}
        ]
    },
    {
        grade: "VI",
        students: [
            {name: "Aman", marks: [10, 20, 30]},
            {name: "Albert", marks: [20, 30, 40]}
        ]
    },
    {
        grade: "VII",
        students: [
            {name: "Yogesh", marks: [10, 20, 30]},
            {name: "Sandhya", marks: [20, 30, 40]}
        ]
    }
];

for(let i=0; i<data.length; i++){
    let name, grade, marks, max=0;
    for(let j=0; j<data[i]["students"].length; j++){
        let sum=0;
        marks= data[i]["students"][j]["marks"];
        for(let k=0; k<marks.length; k++){
            sum+=marks[k];
            if(sum>max){
                max=sum;
                name=data[i]["students"][j]["name"];
                grade=data[i]["grade"];
            }
        }
    }
    console.log(grade+"-"+name+"-"+max);
}

//Second way:----

// let data = [
//     {
//         grade: "V",
//         students: [
//             {name: "Nrupul", marks: [10, 20, 30]},
//             {name: "Prateek", marks: [20, 30, 40]}
//         ]
//     },
//     {
//         grade: "VI",
//         students: [
//             {name: "Aman", marks: [10, 20, 30]},
//             {name: "Albert", marks: [20, 30, 40]}
//         ]
//     },
//     {
//         grade: "VII",
//         students: [
//             {name: "Yogesh", marks: [10, 20, 30]},
//             {name: "Sandhya", marks: [20, 30, 40]}
//         ]
//     },
// ]
//
// for(let i=0; i<data.length; i++){
//     let sum1=0, sum2=0;
//     for(let j=0; j<data[i]["students"][0]["marks"].length; j++){
//         sum1+=data[i]["students"][0]["marks"][j];
//         sum2+=data[i]["students"][1]["marks"][j];
//     }
//     if(sum1>sum2){
//         console.log(data[i]["grade"]+"-"+data[i]["students"][0]["name"]+"-"+sum1);
//     }else{
//         console.log(data[i]["grade"]+"-"+data[i]["students"][1]["name"]+"-"+sum2);
//     }
// }