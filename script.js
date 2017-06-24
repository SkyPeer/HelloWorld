usersarray.forEach(function(item, i) {
  var user = new GetUserFunction(
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
