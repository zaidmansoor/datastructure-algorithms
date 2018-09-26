class Node {
    constructor(_val) {
        this.val = _val;
        this.children = [];
    }
    set val(_val) {
        this.val = _val;
    }
    get val() {
        return this.val;
    }

    set children(_children) {
        this.children = _children;
    }
    get val() {
        return this.children;
    }
}

let a = new Node("A");
a.val = "A";

let b = new Node("B");
a.children.push(b);

let c = new Node("C");

let c

c.children.push(b);