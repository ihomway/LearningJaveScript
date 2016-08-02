// const book = [
//     "Twinkle, twinkle, little bat!",
//     "How I wonder what you're at!",
//     "Up above the world you fly,",
//     "Like a tea tray in the sky.",
//     "Twinkle, twinkle, little bat!",
//     "How I wonder what you're at!",
// ]

// const it = book.values();
// console.log(it.next());

// function* rainbow() {
//     yield 'red';
//     yield 'orange';
//     yield 'yellow';
//     yield 'green';
//     yield 'blue';
//     yield 'indigo';
//     yield 'violet';
// }

// const it = rainbow();
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());

// for(let color of rainbow()) {
//     console.log(color);
// }

function* interrogate() {
    const name = yield "What is your name?";
    const color = yield "what is your favorite color?";
    return `${name}'s favorite color is ${color}.`;
}
const it = interrogate();
console.log(it.next());
console.log(it.next('Ethan'));
console.log(it.next('orange'));
