/*- Given a list of user data with name and age, create a list of key-value pairs from the input
  - From the generated data, print the users whose age is more than 30
  - Sample Input

  ```
  ["Nrupul", "Prateek", "Aman", "Albert", "Yogesh"]
  [32, 30, 26, 28, 44]  */

let names=["Nrupul", "Prateek", "Aman", "Albert", "Yogesh"];
let age=[32, 30, 26, 28, 44];
  let obj={
      data:[],
      addData: function(){
          for(let i=0; i<names.length; i++){
              let box={};
              box["Name"]=names[i];
              box["Age"]=age[i];
              this.data.push(box);
          }
      },
      filterAge: function(){
          for(let i=0;i<this.data.length; i++){
              let take= this.data[i];
              if(take["Age"]>30){
                  console.log(take["Name"]);
              }
          }
      }

  };

obj["addData"]();
obj.filterAge();

