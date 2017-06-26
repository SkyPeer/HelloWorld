let data = require("./arrays");
console.log(" - - - - - - - - - - - - - - - - - - - - - - - - -");
console.log("Task3");
console.log("Source:");
console.log(data.task3array);
console.log(" ");

console.log("filter:");
var ftask3array = data.task3array.filter(function (user) {
    return user.Age >= 18;
});
console.log(ftask3array);


console.log(" ");
console.log("map:");
rtask3array = ftask3array.map(function (user) {
    var fioarray = {fio: user.FirstName + " " + user.LastName + " " + user.Gender + " ", adult: true};
    console.log(fioarray);
    return fioarray;
});
console.log(" ");
console.log("FioArray");
console.log("Array Length= " + rtask3array.length);
console.log(rtask3array);

/* var fioarray = [];
data.task3array.forEach(item=> {
    item.fio = `f:${item.FirstName} n:${item.LastName} g:${item.Gender}` ;
    item.test = {'ttt':2};
    fioarray = {fio: item.FirstName + " " + item.LastName + " " + item.Gender + " ", adult: true};
    console.log(item);
});console.log(data.task3array); */