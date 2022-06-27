var sales = [
    { item: 'PS4 Pro', stock: 3, original: 399.99 },
    { item: 'Xbox One X', stock: 1, original: 499.99, discount: 0.1 },
    { item: 'Nintendo Switch', stock: 4, original: 299.99 },
    { item: 'PS2 Console', stock: 1, original: 299.99, discount: 0.8 },
    { item: 'Nintendo 64', stock: 2, original: 199.99, discount: 0.65 }
];

let obj={
    output: [],
    calculateSalesTotals: function(){
        for(let i=0; i<sales.length; i++){
            let cart={};
            let take=sales[i];
            if(sales[i]["discount"]==undefined){
                cart["item"]=take["item"];
                cart["original"]=take["original"];
                cart["sales"]=take["original"];
                cart["stock"]=take["stock"];
                cart["total"]=take["stock"]*take["sales"];
                this.output.push(cart);
            }else{
                cart["discount"]=take["discount"];
                cart["item"]=take["item"];
                cart["original"]=take["original"];
                cart["sales"]=take["original"]*(1-take["discount"]);
                cart["stock"]=take["stock"];
                cart["total"]=take["stock"]*cart["sales"];
                this.output.push(cart);
            }
        }
        return this.output;
    }
};

let x=obj.calculateSalesTotals();
console.log(x);