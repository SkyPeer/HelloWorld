function GetUser(FirstName, LastName, Age, Gender) {
    this.FirstName = FirstName;
    this.LastName = LastName;
    this.Gender = Gender;
    if ( Age >= 35 ) {
        this.AgeResult = "Not Young ;))";
    }
    if ( Age < 35) {
        this.AgeResult = "Young :)))";
    }
}