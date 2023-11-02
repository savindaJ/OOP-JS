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

//constructor function !

function Customer(name,address){
    this.name = name;
    this.address = address;

    this.printDetail = function (){
        console.log(name,address);
    }
}

const customer = new Customer("savinda","Matara"); //create object

customer.printDetail(); // calling object functin