console.log(" - - - - - - - - - - - - - - - - - - - - - - - - -");
console.log("Task3");console.log("Source:");console.log(task3array);console.log(" ");

console.log("filter:");
var ftask3array = task3array.filter(function (user) {
   return  user.Age >= 18;
});console.log(ftask3array);


console.log(" ");
console.log("map:");
rtask3array = ftask3array.map(function(user) {
            var fioarray = {fio: user.FirstName + " " + user.LastName + " " + user.Gender + " ", adult: true};
       // fio[i] = obj.FirstName + " " + obj.LastName + " " + obj.Gender + " ";
   // console.log("fio "+ "("+ [i] +")"+ " " + fio);
   console.log(fioarray);
    return fioarray;
});
console.log(" ");console.log("FioArray");console.log("Array Length= " + rtask3array.length);console.log(rtask3array);
