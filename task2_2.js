let data = require('./arrays');


for (let i=0; i < data.task2array.length; i++) {
    data.task2array[i] = data.task2array[i] + " 1";
    console.log("i=" + i, "item = " + data.task2array[i])
}
console.log(data.task2array);
//    http://learn.javascript.ru/array-methods