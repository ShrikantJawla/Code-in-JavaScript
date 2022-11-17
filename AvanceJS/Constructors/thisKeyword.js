let name = "Shrikant";

let obj = {
    name: "Anmol",
    age: 25,
    display: function () {
        console.log(this.name, this.age);
    }
}

function display() {
    let name = "Lavi";
    console.log(this.name);
}

obj.display();
display();