let data = require('./arrays');

console.log("Task1");

data.task1array.forEach(function (item, i) {
    //item.name =  item.name + " 1";
    item.name += " 1";
});
console.log(data.task1array);