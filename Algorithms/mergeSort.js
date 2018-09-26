let str = "sortexample".split("");

class MergeSort {
    constructor() {}

    sortHelper(arr, low, high) {
        if (high <= low) {
            return;
        }
    
        let mid = Math.floor(low + ((high - low) / 2));
    
        this.sortHelper(arr, low, mid);
        this.sortHelper(arr, mid + 1, high);
        this.merge(arr, low, mid, high);
    }

    sort(arr) {
        this.sortHelper(arr, 0, arr.length - 1);
        return arr.join("");
    }

    merge(arr, low, mid, high) {
        let aux = [...arr];
        
        let i = low;
        let j = mid + 1;
        for (let k = low; k <= high; k++) {
            if (i > mid) {
                arr[k] = aux[j++];
            } else if (j > high) {
                arr[k] = aux[i++];
            } else if (aux[j] < aux[i]) {
                arr[k] = aux[j++];
            } else {
                arr[k] = aux[i++];
            }
        }
    }
}

let mergeSort = new MergeSort();
console.log(mergeSort.sort(str));