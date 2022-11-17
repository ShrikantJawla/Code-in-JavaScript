//setTimeout
//setTimeout(func, 3000)






//setInterval
//setInterval(func, 3000)

//create a timer:-

//1. need to display time on DOM?
//2. we want to show second. 1,2,3,4
//3. I need to update dom every second?
//4. you need to write a function that execute after evey sec;

// showCounter()

//for(){
    // showCounter
// }

// How to control timer?

let p=document.querySelector("#timer");

count = 0; 
function counter() {
    count++;
    p.innerText = count;
}
