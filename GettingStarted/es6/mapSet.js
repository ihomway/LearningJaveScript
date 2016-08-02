const u1 = {name: 'Cynthia'};
const u2 = {name: 'Jackson'};
const u3 = {name: 'Olive'};
const u4 = {name: 'James'};

// const userRoles = new Map();
// userRoles.set(u1, 'User');
// userRoles.set(u2, 'User');
// userRoles.set(u3, 'Admin');

// userRoles.set(u1, 'User').set(u2, 'User').set(u3, 'Admin');

const userRoles = new Map([
    [u1, 'user'],
    [u2, 'user'],
    [u3, 'admin'],
]);

console.log(userRoles);
console.log(userRoles.has(u1));
console.log(userRoles.get(u1));
console.log(userRoles.has(u4));
console.log(userRoles.get(u4));