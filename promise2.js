
function ABFunction(a) {

    let c = a / a  - 25;
    console.log(c);
}
    /* new Promise((res, rej) => {setTimeout(() => {res({FirstName,LastName,AgeResult,Gender})}, 1000)})}*/




/* let promise = new Promise((resolve, reject) => {

    setTimeout(() => {
        // переведёт промис в состояние fulfilled с результатом "result"
        resolve("result");
    }, 1000);

});

// promise.then навешивает обработчики на успешный результат или ошибку
promise
    .then(
        result => {
            // первая функция-обработчик - запустится при вызове resolve
            console.log("Fulfilled: " + result); // result - аргумент resolve
        },
        error => {
            // вторая функция - запустится при вызове reject
            console.log("Rejected: " + error); // error - аргумент reject
        }
    ); */

let readline = require('readline');

let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function answefunc(answer) {
    console.log("Thank you for your valuable feedback:", answer);
return answer;
};

rl.question("What do you think of io.js? ", function(answer) {
    answefunc(answer);

    rl.close();
});



    /* rl.close(); */

