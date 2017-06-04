var array = [
    {FirstName: 'Ivanov', LastName: 'Ivan', Age: 35, Gender: 'Male'},
    {FirstName: 'Bill', LastName: 'Johnson', Age: 25, Gender: 'Male'},
    ];

array.forEach(function(item, i, array)
{
    var user = new GetUser(
        array[i].FirstName,
        array[i].LastName,
        array[i].Age,
        array[i].Gender
    );
    console.log("ID: " + [i]
        + " FirstName: " + user.FirstName
        + " LastName: " + user.LastName
        + " AgeResult: " + user.AgeResult
        + " Gender: " + user.Gender
    );

});

//console.log("array:" + array);