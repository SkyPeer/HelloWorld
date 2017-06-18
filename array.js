var array = [
    {FirstName: 'Ivanov', LastName: 'Ivan', Age: 35, Gender: 'Male'},
    {FirstName: 'Bill', LastName: 'Johnson', Age: 25, Gender: 'Male'},
    ];

array.forEach(function(item, i)
{
    var user = new GetUser(
        item.FirstName,
        item.LastName,
        item.Age,
        item.Gender
    );
    console.log
    (
        "ID: " + [i]
        + " FirstName: " + user.FirstName
        + " LastName: " + user.LastName
        + " AgeResult: " + user.AgeResult
        + " Gender: " + user.Gender
    );

});

//console.log("array:" + array);