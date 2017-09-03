let readline = require('readline');

let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


let promise = new Promise((resolve, reject) => {
    function answefunc(a) {
        let b = a * 3.25;
        console.log("Thank you for your valuable feedback:", parseInt(b));

        /* return answer; */
    }
});

    rl.question("What do you think of io.js? ", function (answer) {
        answefunc(answer);
        rl.close();
    });

