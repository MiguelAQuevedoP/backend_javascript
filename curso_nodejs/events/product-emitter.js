import EventEmitter from 'events';

const productEmitter = new EventEmitter();

productEmitter.on('purchase',(products)=>{
    console.log(`A purchase was made of:`);
    console.table(products);
    let total = 0;
    for(let i=0;i<products.length;i++){
        total += products[i].price;
    };
    console.log(`The total is: $${total}`);
});

productEmitter.on('sale',()=>{
    console.log('A sale was made');
});

//create a object product
function Product(name, price){
    this.name = name;
    this.price = price;
}

const tomatoe = new Product('tomatoe',5000);
const potatoe = new Product('potatoe',1800);
const lemon = new Product('Lemon',2300);

productEmitter.emit('purchase',[tomatoe,potatoe,lemon]);
productEmitter.emit('sale');