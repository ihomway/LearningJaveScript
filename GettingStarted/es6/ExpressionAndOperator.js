// const n = 5;
// const s = "5";
// console.log(n === s);
// console.log(n !== s);
// console.log(n === Number(s));
// console.log(n !== Number(s));
// console.log(n == s);
// console.log(n != s);

// const a = {name: "an object"};
// const b = {name: "an object"};
// console.log(a === b);
// console.log(a !== b);
// console.log(a == b);
// console.log(a != b);

// let n = 0;
// while (true) {
//     n += 0.1;

//     if (Math.abs(n - 0.3) < Number.EPSILON) {
//         break;
//     }
// }

// console.log(`Stopped at ${n}`);

// console.log(1 + 2);
// console.log("1" + "2");
// console.log(1 + "2");
// console.log("1" + 2);

// const skipIt = false;
// let x = 0;
// const result = skipIt || x++;
// console.log(x);

// const skipIt = true;
// let x = 0;
// const result = skipIt && x++;
// console.log(x);

 let x = 0, y = 10, z;
 z = (x++, y++);
 console.log(z);