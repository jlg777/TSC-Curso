var employee = {
    firstName: "Emil",
    lastName: "Andersson",
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
};
employee.firstName = '10'; //* Error - Type 'number' is not assignable to type 'string'

console.log(employee.fullName())