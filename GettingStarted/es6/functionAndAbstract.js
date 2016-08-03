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
// function loopBody(i) {
//     setTimeout(function() {
//         console.log(i === 0 ? "go!" : i);
//     }, (5 - i) * 1000);
// }


// var i;
// for (i = 5; i >= 0; i--) {
//     loopBody(i);
// }


// var i;
// for (i = 5; i >= 0; i--) {
//     (function(i) {
//         setTimeout(function() {
//             console.log(i === 0 ? "go!" : i);
//         }, 1000 * (i - 5));
//     })(i);
// }

// for (let i = 5; i >= 0; i--) {
//     setTimeout(function() {
//         console.log(i === 0 ? "go!" : i);
//     }, 1000 * (5 - i));
// }

// function addThreeSquareAddFiveTakeSuqareRoot(x) {
//     return Math.sqrt(Math.pow(x + 3, 2) + 5);
// }

// const f = addThreeSquareAddFiveTakeSuqareRoot;
// const answer = (f(5) + f(2)) / f(7);
// console.log(answer);

const sin = Math.sin;
const cos = Math.cos;
const theta = Math.PI / 4;
const zoom = 2;
const offset = [1, -3];

const pipeline = [
    function rotate(p) {
        return {
            x: p.x * cos(theta) - p.y * sin(theta),
            y: p.x * sin(theta) + p.y * cos(theta)
        }
    },
    function scale(p) {
        return {
            x: p.x * zoom,
            y: p.y * zoom
        }
    },
    function translate(p) {
        return {
            x: p.x + offset[0],
            y: p.y + offset[1]
        }
    }
]

const p = {
    x: 1,
    y: 1
};
let p2 = p;

for(let f of pipeline) {
    console.log(`(${p2.x}, ${p2.y})`);
    p2 = f(p2);
}
console.log(`(${p2.x}, ${p2.y})`);