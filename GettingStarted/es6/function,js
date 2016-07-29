// "use strict";

// function sayHello() {
// 	console.log("Hello world!");
// 	console.log("¡Hola mundo!");
// 	console.log("Hallo wereld!");
// 	console.log("Привет мир!");
// }

// sayHello();

// function  getGreeting() {
// 	return "Hello world!";
// }

// const whoops = "whoops";
// whoops();

// function avg(a, b) {
// 	return (a + b) / 2;
// }

// console.log(avg(10, 67));

// function f(x) {
// 	console.log(`inside f: x = ${x}`);
// 	x = 5;
// 	console.log(`inside f: x = ${x}(after assignment)`);
// }
// let x = 3;
// console.log(`before calling f: x = ${x}`);
// f(3);
// console.log(`after calling f: x = ${x}`);

// function f(o) {
// 	o.message = `set in f (previous value: '${o.message}')`;
// }

// let o = {
// 	message: "initial value"
// };

// console.log(`before calling f:o.message = "${o.message}"`);
// f(o);
// f(o);
// console.log(`after calling f:o.message = "${o.message}"`);

// function f(x) {
// 	console.log(`x in f: "${x}"`);
// }

// f();

// function getSentence({ subject, verb, object }) {
//    return `${subject} ${verb} ${object}`;
// } 

// const o = {
// 	subject: "This",
// 	verb: "is",
// 	object: "yours"
// };
// console.log(getSentence(o));

// fun

// function  f(a, b = "default", c = 3) {
// 	return `${a} - ${b} - ${c}`;
// }

// console.log(f(3, 6, 7));
// console.log(f(3, 6));
// console.log(f(3));
// console.log(f());

// const obj = {
// 	name: "Wallace",
// 	bark() {
// 		return "Woof";
// 	},
// 	speak() {
// 		return `My name is ${this.name}`;
// 	}
// }

// console.log(obj.bark());
// console.log(obj.speak());

// const speak = obj.speak;
// console.log(speak());

// const f1 = function() { return "hello!"; }
// // OR
// const f1 = () => "hello!";

// const f2 = function(name) { return `Hello, ${name}!`; }
// // OR
// const f2 = name => `Hello, ${name}!`;

// const f3 = function(a, b) { return a + b; }
// // OR
// const f3 = (a,b) => a + b;

// const obj = {
// 	name: "Julie",
// 	greetBackwards: function () {
// 		const getReverseName = () => {
// 			let nameBackwards = '';
// 			for (let i = this.name.length - 1; i >= 0; i--) {
// 				nameBackwards += this.name[i];
// 			}

// 			return nameBackwards;
// 		}

// 		return `${getReverseName()} si eman ym, olleh`;
// 	}
// }

// console.log(obj.greetBackwards());

const bruce = {name: "Bruce"};
const madeline = {name: "madeline"};

function greet() {
	return `Hello, I'm ${this.name}!`;
}

console.log(greet());
console.log(greet.call(bruce));
console.log(greet.call(madeline));