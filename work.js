//1.
const numbers = [2, 5, 8];
numbers[1] = 10;
console.log(numbers);

//2.
let low = ["line1", "line2", "line3"];
low.push("line4");
console.log(low);

// // 3
// const numbers = [13, 24, 6, 91, 1];
// let summa = 0;
// for(const h of numbers){
//     summa += h;
// }
// console.log(summa);

// 4
const numbers = [1, 2, 3, 4, 5];
for (let i = 0; i < numbers.length; i += 1){
    console.log(numbers[i]);
};

// 5
// const string = ["apple", "mango", "pineapple", "strawberry", "banana"];
// const number = 5;
// for (let i = 0; i < string.length; i += 1 ){
//     if(string[i].length > number){
//         console.log(string[i]);
//     }
// };

// 6
// const numbers = [1, 3, 5, 7, 17, 27, 37, 47, 57, 67];
// let maxNumber = numbers[0];
// for (const maxNum of numbers){
//     if (maxNum > maxNumber){
        
//     }
// }

// 7
const numbers = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 14];

let total = 0;
for( const number of numbers){
    if(number % 2 === 0){
        console.log(number)
    }
};