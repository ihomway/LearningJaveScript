'use strict';
// es6 feature: block-scoped "let" declaration

var sentences = [{ subject: 'iOS', verb: 'is', object: 'system' }, { subject: 'Macbooks', verb: 'are', object: 'great' }];

// es6 feature: object destructuring
function say(_ref) {
    var subject = _ref.subject;
    var verb = _ref.verb;
    var object = _ref.object;

    // es6 feature: template string
    // note that quotes below are backtick(`), not single quote(')
    console.log(subject + ' ' + verb + ' ' + object);
}

// es6 feature: for..of
var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
    for (var _iterator = sentences[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var s = _step.value;

        say(s);
    }
} catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
} finally {
    try {
        if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
        }
    } finally {
        if (_didIteratorError) {
            throw _iteratorError;
        }
    }
}