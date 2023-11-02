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
const obj = createPerson("kamal","Galle");
obj.printDetail();