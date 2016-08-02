// function printLeapYearStatus() {
//     const year = new Date().getFullYear();
//     if (year % 4 == 0) {
//         console.log(`${year} is NOT a leap year.`);
//     } else if (year % 100 != 0) {
//         console.log(`${year} IS a leap year.`);
//     } else if (year % 400 != 0) {
//         console.log(`${year} is NOT a leap year.`);
//     } else {
//         console.log(`${year} IS a leap year.`);
//     }
// }

// printLeapYearStatus();

// function isCurrentYearLeapYear() {
//     const year = new Date().getFullYear;

//     if (year % 4 == 0) {
//         return false;
//     } else if (year % 100 != 0) {
//         return true;
//     } else if (year % 400 != 0) {
//         return false;
//     } else {
//         return true;
//     }
// }

// const nextRainbowColor = (function(){
//     const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
//     let index = -1;
//     return function(){
//         if (++index >= colors.length) {
//             index = 0;
//         }

//         return colors[index];
//     }
// })();

// console.log(nextRainbowColor());
// console.log(nextRainbowColor());
// console.log(nextRainbowColor());
// console.log(nextRainbowColor());

// setTimeout(function() {
//     console.log("hello");
// }, 1500);

var i;
for (i = 5; i >= 0; i--) {
    setTimeout(function() {
        console.log(i === 0 ? "go!" : i);
    }, (5-i)*1000);
    
}