'use strict';
// es6 feature: block-scoped "let" declaration
const sentences = [
    {subject: 'iOS', verb: 'is', object: 'system'},
    {subject: 'Macbooks', verb: 'are', object: 'great'},
];

// es6 feature: object destructuring
function say({subject, verb, object}) {
    // es6 feature: template string
    // note that quotes below are backtick(`), not single quote(')
    console.log(`${subject} ${verb} ${object}`);
}

// es6 feature: for..of
for(let s of sentences) {
    say(s);
}