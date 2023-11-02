// object literal syntax
const person = {
    name:"kamal", //property's
    age:20,//property's
    address:"matara",//property's
    salary:120000,//property's
    hobby:{//property's
        hob1:"footBall",
        hob2:"cricket"
    },
    eat:function (){ //function
        console.log("Person eat")
    }
};

person.eat();

/////////////////////////////////////////////////////////////////////////////////////////////////////


// factorial object !
function createPerson(name,address){
    return{
        name:name,
        address:address,
        printDetail:function (){
            console.log(name,address);
        }
    }
}
const obj = createPerson("kamal","Galle"); //create obj
obj.printDetail(); //calling object function!

////////////////////////////////////////////////////////////////////////////////////////////////////////

//constructor function !

function Customer(name,address){
    this.name = name;
    this.address = address;
    this.printDetail = function (){
        console.log(name,address);
    }

    console.log(this);
}

const customer = new Customer("savinda","Matara"); //create object

customer.printDetail(); // calling object function

console.log(Customer.name); //obj name
console.log(Customer.length); //obj property's
console.log(Customer.constructor);

////////////////////////////////////////////////////////////////////////////////////////////////////////

//adding a property

function Item(qty,price){
    this.qty = qty;
    this.price = price;
}

const item = new Item(11,120);

item.id = "I001"; // adding property i run time ! using dot notation

item['description'] = "Lux"; // adding property i run time ! using bracket notation

console.log(item);

console.log(item.id);
console.log(item.qty);
console.log(item.price);
console.log(item.description); //accessing a property

const propertyName = 'id'; //store a property name

console.log(item[propertyName]); // and using a property name

////////////////////////////////////////////////////////////////////////////////////////////////////////

//delete a property

function Layer(floor){
    this.floor = floor;
}

const layer = new Layer();

delete layer.floor; // delete a property

layer.flor = 12; // adding a property always doing to add property with this property values !

console.log(layer);

for (const layerKey in layer) {
    console.log(layerKey); //eneumaring a object
}

const keyArray = Object.keys(layer); //get key array in object

for (let i = 0; i < keyArray.length; i++) {
    console.log(keyArray[i]);
}

