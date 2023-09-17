const url = new URL('https://www.example.com/curses/programming?sort=views&level=1');

console.log(url.hostname); //output --> www.example.com
console.log(url.pathname); //output --> /curses/programming
console.log(url.searchParams.get('sort')); //output --> views
console.log(url.searchParams.get('level')); //output --> 1

console.log(url.protocol); //output --> https:
console.log(url.origin); //output --> https://www.example.com
console.log(url.href); //output --> https://www.example.com/curses/programming?sort=views&level=1
