//Fucntion Returning Func

function myFunc(){
    function hello(){
        console.log("hello World")
    }
    return hello;
}

const ans = myFunc();
ans();