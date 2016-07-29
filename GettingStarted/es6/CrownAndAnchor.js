// function rand(m, n) {
//     return m + Math.floor((n - m + 1) * Math.random());
// }

// function randFace() {
//     return ["crown", "anchor", "heart", "spade", "club", "diamond"][rand(0, 5)];
// }

// let funds = 50;
// let round = 0;

// while (funds > 1 && funds < 100) {
//     round++;
//     console.log(`round ${round}`);
//     console.log(`\tstarting funds: ${funds}p`);

//     // place bets
//     let bets = {
//         corwn: 0,
//         anchor: 0,
//         heart: 0,
//         spade: 0,
//         club: 0, 
//         diamond: 0
//     };

//     let totalBet = rand(1, funds);
//     if (totalBet === 7) {
//         totalBet = funds;
//         bets.heart = totalBet;
//     } else {
//         let remaining = totalBet;

//         do {
//             let bet = rand(1, remaining);
//             let face = randFace();
//             bets[face] = bets[face] + bet;
//             remaining = remaining - bet;
//         } while(remaining > 0);
//     }

//     funds = funds - totalBet;
//     console.log('\tbets: ' + Object.keys(bets).map(face => `${face}: ${bets[face]} pence`).join(',') + ` (total: ${totalBet} pence)`);
//     // roll dice
//     const hand = [];
//     for (var roll = 0; roll < 3; roll++) {
//         hand.push(randFace());
//     }
//     console.log(`\thand: ${hand.join(',')}`);

//     // collect winnings
//     let winnings = 0;
//     for (var die = 0; die < hand.length; die++) {
//         var face = hand[die];
//         if(bets[face] > 0) {
//             winnings = winnings + bets[face];
//         }
//     }

//     funds = funds + winnings;
//     console.log(`\twinnings: ${winnings}`);
// }

// console.log(`\tending funs: ${funds}`);

// let x = 2;
// const r1 = x++ + x++;
// const r2 = ++x + ++x;
// const r3 = x++ + ++x;
// const r4 = ++x + x++;

// let y = 10;
// const r5 = y-- + y--;
// const r6 = --y + --y;
// const r7 = y-- + --y;
// const r8 = --y + y--;

// console.log(`r1: ${r1}, r2: ${r2}, r3: ${r3}, r4: ${r4}, \
//  r5: ${r5}, r6: ${r6}, r7: ${r7}, r8: ${r8}`);