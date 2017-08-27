let task3array = require ('./arrays');

task3array.forEach(function(item, i) {
  let user = new GetUserFunction(
    item.FirstName,
    item.LastName,
    item.Age,
    item.Gender
  );
  console.log(
    "ID: " + [i] + 
    " FirstName: " + user.FirstName + 
    " LastName: " + user.LastName + 
    " AgeResult: " + user.AgeResult + 
    " Gender: " + user.Gender
  );
});
