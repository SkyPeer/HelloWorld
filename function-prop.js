var User = {
    FirstName: "Сидор",
    LastName: "Сидоров"
};
Object.defineProperty(User, "fullName", {

get: function () {return this.FirstName + ' ' + this.LastName}
    });
console.log("Function Property: " + User.fullName);