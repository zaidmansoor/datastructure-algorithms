class Heap {
    constructor(capacity) {
        this.pq = new Array(capacity + 1).fill("-");
        this.count = 0;
    }

    isEmpty() {
        return this.count === 0;
    }

    insert(key) {
        this.pq[++this.count] = key;
        this.swim(this.count);
    }

    deletMax() {
        let key = this.pq[1];
        this.exchange(1, this.count--);
        this.sink(1);
        this.pq[this.count + 1] = null;
        return key;
    }

    sink(k) {
        while (2 * k <= this.count) {
            let j = 2 * k;
            if (j < this.count && this.pq[j] < this.pq[j + 1]) {
                j++;
            }

            if (this.pq[k] > this.pq[j]) {
                break;
            }

            this.exchange(k, j);
            k = j;
        }
    }

    swim(k) {
        let pK = Math.floor(k / 2);
        while (k > 1 && (this.pq[pK] < this.pq[k])) {
            this.exchange(pK, k);
            k = pK;
            pK = Math.floor(k / 2);
        }
    }

    exchange(i, j) {
        let t = this.pq[i];
        this.pq[i] = this.pq[j];
        this.pq[j] = t;
    }

    print() {
        console.log(this.pq);
    }
}

let pq = new Heap(10);

pq.insert("h");
pq.insert("e");
pq.insert("a");
pq.insert("p");
pq.insert("s");
pq.insert("o");
pq.insert("r");
pq.insert("t");
pq.print();
console.log("remove");
console.log(pq.deletMax());
pq.print();
console.log("remove");
console.log(pq.deletMax());
pq.print();
console.log("remove");
console.log(pq.deletMax());
pq.print();
console.log("remove");
console.log(pq.deletMax());
pq.print();
console.log("remove");
console.log(pq.deletMax());
pq.print();

console.log("remove");
console.log(pq.deletMax());
pq.print();

console.log("remove");
console.log(pq.deletMax());
pq.print();