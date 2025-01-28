const os = require('os');

//display architecture of system 64 or 32
console.log(os.arch());

//display available free memory
console.log(os.freemem()/(1024*1024*1024));

//display total memory
console.log(os.totalmem()/(1024*1024*1024));

//dispaly hostname
console.log(os.hostname());

//display platform
console.log(os.platform());

//dispaly user info
console.log(os.userInfo());
