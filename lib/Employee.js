// TODO: Write code to define and export the Employee class
// This is used to define the class Employee as well as exporting it
class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
    getName () {
        return this.name;
    }
    
    getId () {
        return this.id;
    }
    
    getEmail () {
        return this.email;
    }
    
    getRole () {
        return "Employee";
    }
};

//syntax to export!
module.exports = Employee
