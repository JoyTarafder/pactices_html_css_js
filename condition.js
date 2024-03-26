// let num = 8;

// if (num > 0) {
//     console.log("The number is positive.");
// } else if (num < 0) {
//     console.log("The number is negative.");
// } else {
//     console.log("The number is zero.");
// }

// console.log("Hello World");

const price = 10000;

if (price >= 5000) {
    const dis = price * 10 / 100;
    const total = price - dis;
    console.log( "this is your total price : ", total);
    console.log(dis);
}
else {
    console.log("this is your total price : ", price);
}