var User = {
    FirstName: "John",
    LastName: "Hopper"
};
Object.defineProperty(User, "fullName", {
    get: function () {return this.FirstName + ' ' + this.LastName}
    });

console.log("Function Property: " + User.fullName);