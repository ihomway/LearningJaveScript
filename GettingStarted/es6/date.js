// const d = new Date(2015,0,1,13,30,5);
// console.log(d);
// const cd = new Date();
// console.log(cd);
// console.log(Date.UTC(2016, 4, 27));

// const moment = require('moment-timezone');

// const d = moment.tz([2016, 3, 27, 9, 19], 'America/Los_Angeles').toDate();
// console.log(d);

// const d = new Date(Date.UTC(1930, 4, 10));
// console.log(d.toLocaleDateString());
// console.log(d.toLocaleFormat());
// console.log(d.toLocaleTimeString());
// console.log(d.toTimeString());
// console.log(d.toUTCString());

// console.log("==========moment==========");
// console.log(moment(d).format("YYYY-MM-DD"));
// console.log(moment(d).format("YYYY-MM-DD HH:mm"));
// console.log(moment(d).format("YYYY-MM-DD HH:mm Z"));
// console.log(moment(d).format("YYYY-MM-DD HH:mm [UTC]Z"));
// console.log(moment(d).format("dddd, MMMM [the] Do, YYYY"));
// console.log(moment(d).format("h:mm a"));

const d1 = new Date(1996, 2, 1);
const d2 = new Date(2009, 4, 27);
console.log(d1 > d2);
console.log(d1 < d2);