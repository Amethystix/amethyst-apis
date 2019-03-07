const moment = require('moment');

const momentMath = moment({hour: 7, minute: 5}).subtract(5, 'hour').subtract(5, 'minute');
console.log(momentMath < moment({hour: 3, minute: 7}));