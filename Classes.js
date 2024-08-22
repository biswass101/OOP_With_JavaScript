class Test {
    constructor(a, b, c)
    {
        console.log(a, b, c);
    }
    getName(){
        console.log("Niloy");
    }
    getVal()
    {
        console.log("No val");
    }
}

const a = new Test(10, 20, 30)

console.log(a.getName());
