class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

class BST {
    constructor() {
        this.root = null;
    }

    insert(val) {
        if (!this.root) {
            this.root = new Node(val);
        } else {
            let curr = this.root;
            let insertHelper = function(node, val) {
                if (node.val > val) {
                    if (node.left) {
                        insertHelper(node.left, val);
                    } else {
                        node.left = new Node(val);
                    }
                } else {
                    if (node.right) {
                        insertHelper(node.right, val);
                    } else {
                        node.right = new Node(val);
                    }
                }
            }

            insertHelper(curr, val);
        }
    }

    find(val) {
        let curr = this.root;

        while(curr) {
            if (val < curr.val) {
                curr = curr.left;
            } else if (val > curr.val) {
                curr = curr.right;
            } else {
                return curr;
            }
        }

        return null;
    }

    printInorder() {
        let arr = [];

        let inorder = function (node) {
            if (!node) {
                return
            }

            inorder(node.left);
            arr.push(node.val);
            inorder(node.right);
        }

        inorder(this.root);
        return arr;
    }
}

let tree = new BST();
tree.insert(10);
tree.insert(5);
tree.insert(1);
tree.insert(7);
tree.insert(50);
tree.insert(40);
console.log(tree.printInorder());