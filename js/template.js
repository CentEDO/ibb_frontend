
// //console.log(number1);
// function twoNumberSum(){
//     let number1, number2;
//     number1 = Number(prompt("Lütfen 1.sayıyı giriniz"));
//     number2 = Number(prompt("Lütfen 2.sayıyı giriniz"));
//     const number3 = number1 + number2;
//     console.log(number3);
// }
// //twoNumberSum()

// let twoNumberSum2 = function (){
//     let number1, number2;
//     number1 = Number(prompt("Lütfen 1.sayıyı giriniz"));
//     number2 = Number(prompt("Lütfen 2.sayıyı giriniz"));
//     const number3 = number1 + number2;
//     console.log(number3);
// }
// twoNumberSum2();
// let twoNumberSum3 = (number1, number2) => {
//     number1 = Number(prompt("Lütfen 1.sayıyı giriniz"));
//     number2 = Number(prompt("Lütfen 2.sayıyı giriniz"));
//     const number3 = number1 + number2;
//     console.log(number3);
// }
// twoNumberSum3(Number(prompt("Lütfen 1.sayıyı giriniz")),Number(prompt("Lütfen 2.sayıyı giriniz")));
let twoNumberSum5 = () => {
    number1 = Number(prompt("Lütfen 1.sayıyı giriniz"));
    number2 = Number(prompt("Lütfen 2.sayıyı giriniz"));
    let data=Math.abs(Math.round(Math.sqrt(Math.min(number1,number2))));
    console.log(data);
}
//twoNumberSum5()
let data1=12/2;