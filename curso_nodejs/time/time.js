function viewTheme(theme){
    console.log(`I'm learning ${theme}`);
}
console.log('before than setImmediate()');
//setTimeOut() is for run a function when the time is out
//The structure is: setTimeOut(function(),time[ms], arg1, arg2);
setTimeout(viewTheme, 2000, 'nodejs');
//setImmediate() is for run the function in the next loop of events loop
//The structure is: setImmediate(function(),arg1,arg2);
setImmediate(viewTheme, 'setImmediate()');
console.log('after than setImmediate()');
//setInterval() is for run code infinite times whit a specific delay [ms]
//The structure is: setInterval(function(), interval, arg1, arg2);
setInterval(viewTheme, 1500, 'setInterval()');