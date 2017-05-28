function GetUser(FirstName, LastName, Age, Gender) {
    this.FirstName = FirstName;
    this.LastName = LastName;
    this.Gender = Gender;
    if ( Age >= 25 ) {
        this.Age = Age * 4
    }
    if ( Age < 25) {
        this.Age = Age * 3
    }
}