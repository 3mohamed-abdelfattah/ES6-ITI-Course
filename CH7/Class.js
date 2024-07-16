class Name {
    constructor(name, parent) {
        this.name = name;
        this.parent = parent;
    }
    get parent() { return this.parent };
    set parent(value) { this.parent = value };
}