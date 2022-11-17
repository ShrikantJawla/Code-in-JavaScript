function products(n, p) {
    let obj = {};
    obj.name = n;
    obj.price = p;
    return obj;
}


console.log(products("Nike", 2500));

//contructor function:-

function nikeProduct(n,p) {
    this.name = n;
    this.price = p;
}

let prod = new nikeProduct("Nike", 4500);
console.log(prod);