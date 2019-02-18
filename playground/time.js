var moment = require('moment');

var createdAt = 1234;
var date = moment(createdAt);
// date.add(10,'years').subtract(9,'months');
//
// console.log(date.format('MMM Do, YYYY'));

var someTimestamp = moment().valueOf();
console.log(someTimestamp);

console.log(date.format('h:mm a'));
