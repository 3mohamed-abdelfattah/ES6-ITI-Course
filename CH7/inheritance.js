class Name {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}

class Children extends Name {
    constructor(firstName, lastName) {
        super(firstName, lastName);
    }

}

const child = new Children("Mohamed", "Mohamed");
console.log(child.getFullName());
