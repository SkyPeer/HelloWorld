GetUserFunction(FirstName, LastName, Age, Gender) {
    this.FirstName = FirstName;
    this.LastName = LastName;
    this.Gender = Gender;
    if (Age >= 18) {
        this.AgeResult = "Not Young";
    }
    if (Age < 18) {
        this.AgeResult = "Young";
    }
    return {FirstName, LastName, AgeResult, Gender};
}