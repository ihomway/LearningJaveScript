// const arr = ["b", "c", "d"];
// console.log(arr.push("e"));
// console.log(arr.pop());

// console.log(arr.unshift("a"));
// console.log(arr.shift());

// const arr = [1, 2, 3];
// console.log(arr.concat(4, 5, 6));
// console.log(arr);

// console.log(arr.concat([4, 5, 6]));
// console.log(arr);

// console.log(arr.concat([4, 5], 6));
// console.log(arr);

// console.log(arr.concat([4, [5, 6]]));
// console.log(arr);

// const arr = [1, 2, 3, 4, 5];
// console.log(arr.slice(3));
// console.log(arr.slice(2, 4));
// console.log(arr.slice(-2));
// console.log(arr.slice(1, -2));
// console.log(arr.slice(-2, -1));

// const arr = [1, 5, 7];
// console.log(arr.splice(1, 0, 2, 3, 4));
// console.log(arr);
// console.log(arr.splice(5, 0, 6));
// console.log(arr);
// console.log(arr.splice(1, 2));
// console.log(arr);
// console.log(arr.splice(2, 1, 'a', 'b'));
// console.log(arr);

// class Person {
// 	constructor(name) {
// 		this.name = name;
// 		this.id  = Person.nextID++;
// 	}
// }
// Person.nextID = 0;

// const jamie = new Person("Jamie"),
// 	juliet = new Person("Juliet"),
// 	peter = new Person("Peter"),
// 	jay = new Person("Jay");
// const arr = [jamie, juliet, peter, jay];

// console.log(arr.find(p => p.id === juliet.id));
// console.log(arr.find(p => p.id === this.id, juliet));

// const cart = [{name: "Widget", price: 9.95}, {name: "Gadget", price: 22.95}];
// const names = cart.map(x => x.name);
// console.log(names);
// const prices = cart.map(x => x.price);
// console.log(prices);
// const discountPrices = prices.map(x => x * 0.8);
// console.log(discountPrices);
// const lcName = names.map(x => String.toLowerCase);
// console.log(lcName);

const cards = [];
for (let suit of ['H', 'C', 'D', 'S']) {
	for (let value = 1; value <= 13; value++) {
		cards.push({suit, value});
	}
}

// console.log(cards);
// console.log(cards.filter(c => c.value === 2));
// console.log(cards.filter(c => c.suit === 'D'));
// console.log(cards.filter(c => c.value > 10));
// console.log(cards.filter(c => c.value > 10 && c.suit === 'H'));

// function cartToString(c) {
// 	const suits = {
// 		'H' : '\u2665',
// 		'C' : '\u2663',
// 		'D' : '\u2666',
// 		'S' : '\u2660'
// 	};
// 	const values = {
// 		1 : 'A',
// 		11 : 'J',
// 		12 : 'Q',
// 		13 : 'K'
// 	};

// 	for(let i = 2; i <= 10; i++) {
// 		values[i] = i;
// 	}

// 	return suits[c.suit] + values[c.value];
// }

// console.log(cards.filter(c => c.value === 2).map(cartToString));
// console.log(cards.filter(c => c.value > 2 && c.suit === 'H').map(cartToString));

// const arr = [5, 7, 2, 4];
// // const sum = arr.reduce((a, x) => a += x, 0);
// const sum = arr.reduce((a, x) => a + x);
// console.log(sum);

// const words = ["Beachball", "Rodeo", "Angel", "Aardvark", "Xylophone", "November", "Chocolate", "Papaya", "Uniform", "Joker", "Clover", "Bali"];
// const alphabetical = words.reduce((a, x) => {
// 	if (!a[x[0]]) {
// 		a[x[0]] = [];
// 	}

// 	a[x[0]].push(x);
// 	return a;
// }, {});
// console.log(alphabetical);

// const data = [3.3, 5, 7.2, 12, 4, 6, 10.3];
// const stats = data.reduce((a, x) => {
// 	a.N++;
// 	let delta = x - a.mean;
// 	a.mean += delta / a.N;
// 	a.M2 += delta * (x - a.mean);
// 	return a;
// }, {N: 0, mean: 0, M2: 0});

// if(stats.N > 2) {
// 	stats.variance = stats.M2 / (stats.N - 1);
// 	stats.stdev = Math.sqrt(stats.variance);
// }

// console.log(stats);

// const words = ["Beachball", "Rodeo", "Angel", "Aardvark", "Xylophone", "November", "Chocolate", "Papaya", "Uniform", "Joker", "Clover", "Bali"]; 
// const longWords = words.reduce((a, w) => w.length > 6 ? a + " " + w : a, "").trim();
// console.log(longWords);

const arr = [1, 2, 3, 4, 5];
delete arr[2];
console.log(arr.map(x => 0));