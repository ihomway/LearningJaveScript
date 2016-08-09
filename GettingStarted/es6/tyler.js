// function calculate(r) {
// 	return 4 / 3 * Math.PI * Math.pow(r, 3);
// }

// module.exports = calculate;

let lastMessage;
module.exports = function(prefix) {
	return function(message) {
		const now = Date.now();
		const sinceLastMessage = now - (lastMessage || now);
		console.log(`${prefix} ${message} +${sinceLastMessage}ms`);
		lastMessage = now;
	}
}