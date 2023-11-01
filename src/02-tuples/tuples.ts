const prices: (number | string)[] = [10, 20, 30, 'AS'];
 prices.push(40);
 prices.push('AS');

 console.log(prices);

let user: [string, number, boolean];

user = ['carlos', 19, true];

const [username, age] = user;

console.log(username);
console.log(age);
