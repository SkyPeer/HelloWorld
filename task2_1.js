let data = require('./arrays');
data.task2array.forEach(function (item, i) {
   item = item + " 1";
   console.log("i=" + i, "item = " + item);
});
console.log(data.task2array);