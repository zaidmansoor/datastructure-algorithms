class Node {
    constructor(val, next) {
        this._val = val;
        this._next = next;
    } 

    set next(next) {
        this._next = next;
    }

    get next() {
        return this._next;
    }

    set val(val) {
        return this._val = val;
    }

    get val() {
        return this._val;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }

    add(value) {
        const node = new Node(value);
        node.next = this.head;
        this.head = node;
        this.length++;
    }

    isEmpty() {
        return this.length;
    }

    pop() {
        const node = this.head;
        this.head = this.head.next;
        this.length--;

        return node;
    }

    print() {
        let node = this.head;
        while(node) {
            console.log(node.val);
            node = node.next;
        }
    }
}

module.exports = LinkedList;