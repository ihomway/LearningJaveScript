// console.log("Before timeout: " + new Date());

// function f() {
//     console.log("After timeout: " + new Date());
// }

// setTimeout(f, 60 * 1000);
// console.log("I happen after setTimeout!");
// console.log("Me too!");

// const fs = require('fs');

// const fname = 'may_or_may_not_exist.txt';
// fs.readFile(fname, function(err, data) {
//     if (err) {
//         return console.error(`error reading file ${fname}: ${err.message}`);
//     }

//     console.log(`${fname} contents: ${data}`);
// })

// function readSketchyFile() {
//     try {
//         fs.readFile('does_not_exist.txt', function(err, data) {
//             if(err) throw err;
//         });
//     } catch (err) {
//         console.log('warning: minor issue occured, program continuing');
//     }
// }

// readSketchyFile();

// function countdown(seconds) {
//     return new Promise(function(resolve, reject) {
//         for (let i = seconds; i >= 0; i--) {
//             setTimeout(function() {
//                 if(i===13) {
//                     return reject(new Error("DEFINITELY NOT COUNTING THAT"));
//                 }

//                 if(i > 0) {
//                     console.log(i + '...');
//                 } else {
//                     resolve(console.log("GO!"));
//                 }
//             }, (seconds - i) * 1000);
            
//         }
//     })
// }

// countdown(7).then(function() {
//     console.log("countdown completed successfully");
// }, function(err) {
//     console.log("countdown experienced an error: " + err.message);
// });
// const p = countdown(13);
// p.then(function() {
//     console.log("countdown completed successfully");
// });
// p.catch(function(err) {
//     console.log("countdown experienced an error: " + err.message);
// })

// const EventEmitter = require('events').EventEmitter;

// class Countdown extends EventEmitter {
//     constructor(seconds, superstitious) {
//         super();
//         this.seconds = seconds;
//         this.superstitious = !!superstitious;
//     }

//     go() {
//         const countdown = this;
//         const timeoutIds = [];
//         return new Promise(function(resolve, reject) {
//             for(let i = countdown.seconds; i >= 0; i--) {
//                 timeoutIds.push(setTimeout(function() {
//                     if(countdown.superstitious && i===13){
//                         timeoutIds.forEach(clearTimeout);
//                         return reject(new Error("DEFINITELY NOT COUNTING THAT"));
//                     }
//                     countdown.emit('tick', i);
//                     if (i === 0) {
//                         resolve();
//                     }
//                 }, (countdown.seconds - i) * 1000));
//             }
//         })
//     }
// }

// const c = new Countdown(17, true).on('tick', function(i) {
//     if (i>0) {
//         console.log('tick: ' + i + '...');
//     }
// });

// c.go().then(function() {
//     console.log('GO');
// }).catch(function(err) {
//     console.error(err.message);
// })

// function launch() {
//     return new Promise(function(resolve, reject) {
//         if(Math.random() < 0.5) return;
//         console.log("Lift off!");
//         setTimeout(function() {
//             resolve("In orbit!");
//         }, 2 * 1000);
//     })
// }

// const c = new Countdown(5).on('tick', i => console.log(i + '...'));
// c.go().then(launch).then(function(msg) {
//     console.log(msg);
// }).catch(function(err) {
//     console.error("Houstonm, we have a problem...");
// })

function nfcall(f, ...args){
    return new Promise(function(resolve, reject) {
        f.call(null, ...args, function(err, ...args) {
            if(err) {
                return reject(err);
            }

            resolve(args.length < 2 ? args[0] : args);
        });
    });
}

function ptimeout(delay) {
    return new Promise(function(resolve, reject) {
        setTimeout(resolve, delay);
    });
}

function grun(g) {
    const it = g();
    (function iterate(val) {
        const x = it.next(val);
        if (!x.done) {
            if (x.value instanceof Promise) {
                x.value.then(iterate).catch(err => it.throw(err));
            } else {
                setTimeout(iterate, 0, x.value);
            }
        }
    })();
}