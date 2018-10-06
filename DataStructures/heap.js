class Heap {
    constructor(capacity) {
        this.pq = new Array(capacity + 1).fill("-");
        this.count = 0;
    }

    isEmpty() {
        return this.count === 0;
    }

    insert(val) {
        this.pq[++this.count] = val;
        this.swim(this.count);
    }

    deletMax() {
        this.exchange(1, this.count);
        let val = this.pq[this.count];
        this.count--;
        this.sink(1);
        this.pq[this.count + 1] = "-";
        
        return val;
    }

    swim(i) {
        let parent = Math.floor(i / 2);
        while(i > 1 && this.pq[i] > this.pq[parent]) {
            this.exchange(i, parent);
            i = parent;
            parent = Math.floor(parent / 2);
        }
    }

    sink(i) {
        while( 2 * i <= this.count) {
            let child = 2 * i;

            if (child < this.count && this.pq[child] < this.pq[child + 1]) {
                child++;
            }

            if (this.pq[child] < this.pq[i]) {
                break;
            }

            this.exchange(i, child);
            i = child;
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

pq.insert(1);
pq.insert(2);
pq.insert(3);
pq.insert(4);
pq.insert(5);
pq.insert(6);
pq.insert(7);
pq.insert(8);
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


