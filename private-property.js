function Sample(){
    let address;

    let myMethod = function (){
        console.log("my function !")
    }

    this.name = "customer";
}

const s = new Sample();

// s.address; not accsess

// s.myMethod();  not used

// s.name only use name


// getter and setter

function Student(){
    let __name;
    let __address;
    let __school;

    this.getName = function (){
        return __name;
    }

    this.setName = function (name){
        __name = name;
    }
}

const stu = new Student();
stu.setName("kamal")
console.log(stu.getName());

