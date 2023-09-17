const os = require('os');
// console.log(os.userInfo());
// console.log(os.uptime());
// console.log(os.platform());
// console.log(os.arch());
// console.log(os.cpus());

console.table({
    os: os.platform(),
    version: os.release(),
    totalMemory: os.totalmem()
})