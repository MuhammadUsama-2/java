const app = () => {
    const myFunc = () =>{
        console.log("hello")
    }
    const addTwo = (num1,num2) =>{
        return num1 + num2 ;
    }
    const mul = (num1,num2)=> num1 * num2;
    console.log("inside app");
    myFunc();
    console.log(addTwo(2,2));
    console.log(mul(3,2));
}
app();
