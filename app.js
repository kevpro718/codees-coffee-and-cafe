console.log('hi this is Kevin');


function sayHello() {
    var answer= prompt('How are you today?'); 
    console.log(answer);
    var name = prompt('What is your name?');
    document.write(name);
}
function greeting() {
    var today = new Date();
    var hourNow = today.getHours();
    var greeting;
    
    if (hourNow > 18) {
        greeting = 'Good evening!';
    }  else if (hourNow > 12) {
        greeting = 'Good afternoon!';
    }  else if (hourNow > 0)  {
        greeting = 'Good morning!';
    }  else {
        greeting = 'Welcome!';
    }
    
    document.write('<h3>' + greeting + '</h3>');   
}
function orderFood() {
    var answer= prompt('How many would you like today?');

    for (var i = 0; i < answer; i++) {
        document.write('<img src="https://kriscarr.com/wp-content/uploads/2014/12/Thank-You-Blog-Header.png" width: "100">');
    }
}
