// const input = "As I was going to Saint Ives";
// console.log(input.startsWith("As"));
// console.log(input.endsWith("Ives"));
// console.log(input.startsWith("going", 9));
// console.log(input.endsWith("going", 14));
// console.log(input.includes("going"));
// console.log(input.includes("going", 10));
// console.log(input.indexOf("going"));
// console.log(input.indexOf("going", 10));
// console.log(input.indexOf("npoe"));
// console.log(input.toLowerCase().startsWith("as"));
// console.log(input.replace("going", "walking"));

// const re = /\w{5,}/ig;
// console.log(input.match(re));
// console.log(input.search(re));
// console.log(re.test(input));
// console.log(re.exec(input));
// console.log(re.exec(input));
// console.log(re.exec(input));
// console.log(re.exec(input));
// console.log(re.exec(input));
// console.log(input.replace(re, "****"));

// const input = "X J A N L I O N A T U R E J X E E L N P";

// const html = 'HTML with <a href="/one">one link</a>, and some JavaScript.<script src="stuff.js"></script>';
// const matchs = html.match(/area|a|link|script|source/ig);
// console.log(matchs);

// const beer99 = "99 bottles of beer on the wall" +
// "take 1 down and pass it around -- " +
// "98 bottles of beer on the wall.";
// const matchs = beer99.match(/[\S]/g);
// console.log(matchs);

// const stuff = "hight:      9\nmedium:     5\nlow:        2\n";
// const matchs = stuff.match(/:\s*[0-9]/g);
// console.log(matchs);

// const messyPhone = '(505) 555-1515';
// const neatPhone = messyPhone.replace(/\D/g, '');
// console.log(neatPhone);

// const field = "   something    ";
// const valid = /\S/.test(field);
// console.log(valid);

// const matchs = beer99.match(/[a-z]+/g);
// console.log(matchs);

// const input = "Address: 333 Main St., Anywhere, NY, 55532. Phone: 555-555-2525.";
// const matchs = input.match(/\d{5}.*/);
// console.log(matchs);

// const text = "Visit oreilly.com today";
// const match = text.match(/[a-z]+(?:\.com|\.org|\.edu)/i);
// console.log(match);

// const html = '<link rel="stylesheet" href="http://insecure.com/stuff.css">\n' + 
// '<link rel="stylesheet" href="https://secure.com/securestuff.css">\n' +
// '<link rel="stylesheet" href="//anything.com/flexible.css">';
// const match = html.match(/(?:https?)?\/\/[a-z][a-z0-9-]+[a-z0-9]+/ig);
// console.log(match);

// const input = "Regex pros know the difference between\n" +
//    "<i>greedy</i> and <i>lazy</i> matching.";
// console.log(input.replace(/<i>(.*?)<\/i>/ig, '<strong>$1</strong>'));

// const promo = "Opening for XAAX is the dynamic GOOG!  At the box office now!";
// const bands = promo.match(/(?:[A-Z])(?:[A-Z])\2\1/g);
// console.log(bands);

// const html = `<img alt='A "simple" example.'>` +
//          `<img alt="Don't abuse it!">`;
// const matches = html.match(/<img alt=(?:['"]).*?\1/g);
// console.log(matches); 

// let html = '<a class="nope" href="/yep">Yep</a>';
// html = html.replace(/<a .*?(href=".*?").*?>/, '<a $1>');
// console.log(html);

// let html = '<a class="yep" href="/yep" id="nope">Yep</a>';
// html = html.replace(/<a .*?(class=".*?").*?(href=".*?").*?>/, '<a $2 $1>');
// console.log(html);

const html =
   `<a class="foo" href="/foo" id="foo">Foo</a>\n` +
   `<A href='/foo' Class="foo">Foo</a>\n` +
   `<a href="/foo">Foo</a>\n` +
   `<a onclick="javascript:alert('foo!')" href="/foo">Foo</a>`;

function sanitizeATag(aTag) {
 	const parts = aTag.match(/<a\s+(.*?)>(.*?)<\/a>/i);

 	const attributes = parts[1].split(/\s+/);
 	// console.log(`sanitizeATag: ${attributes}`);
 	return '<a ' + attributes.filter(attr => /^(?:class|id|href)[\s=]/i.test(attr)).join(' ') + '>' + parts[2] + '</a>';
}

// html.match(/<a .*?>(.*?)<\/a>/ig);
// html.replace(/<a .*?>(.*?)<\/a>/ig, function(m, g1, offset) {
// 	console.log(`<a> tag found at ${offset}. contents: ${g1}`);
// });

console.log(html.replace(/<a .*?<\/a>/ig, sanitizeATag));