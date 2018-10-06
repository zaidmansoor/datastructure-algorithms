class Node {
    constructor() {
        this.isWord = false;
        this.children = {};
    }
}

class Trie {
    constructor() {
        this.root = new Node();
    }

    insert(str) {
        let node = this.root;
        str = str.split("");

        for (let i = 0; i < str.length; i++) {
            let c = str[i];

            if (!node.children[c]) {
                node.children[c] = new Node();
            }

            node = node.children[c];
        }

        node.isWord = true;
    }

    search(str) {
        let node = this.root;
        str = str.split("");

        for (let i = 0; i < str.length; i++) {
            let c = str[i];

            if (!node.children[c]) {
                return false;
            }

            node = node.children[c];
        }

        return node.isWord;
    }

    startWith(str) {
        let node = this.root;
        str = str.split("");

        for (let i = 0; i < str.length; i++) {
            let c = str[i];

            if (!node.children[c]) {
                return false;
            }

            node = node.children[c];
        }

        return true;
    }
}

let trie = new Trie();
trie.insert("i love coding");
trie.insert("island");
console.log("search island", trie.search("island"));
console.log("startWith i ", trie.startWith("i "));
console.log("startWith za", trie.startWith("za"));