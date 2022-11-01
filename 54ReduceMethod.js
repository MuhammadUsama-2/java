// reduce 
const numbers = [1,2,3,4,5];

// aim : sum of all the numbers in array 


const sum  = numbers.reduce((accumulator, currentValue)=>{
    return accumulator + currentValue;
});

//console.log(sum);

// accumulator , currentValue , return
// 1               2              3
// 3               3              6
// 6               4              10
// 10              5              15  

const userCart = [
    {productId: 1, productName: "mobile", price:12000},
    {productId: 2, productName: "laptop", price:32000},
    {productId: 3, productName: "tv", price:22000}
]
const totalAmount = userCart.reduce((totalPrice, currentProduct)=>{
       
     return totalPrice + currentProduct.price ;
},0)

console.log(totalAmount);

// total price    currentValue  return
// 0                  {}          12000
// 12000            32000          44000
//44000              22000          66000