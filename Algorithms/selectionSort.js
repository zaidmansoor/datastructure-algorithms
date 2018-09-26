let str = "selectionsort".split("");
let ii = 0;

for (let i = 0; i < str.length; i++) {
    let min = i;

    for (let j = i + 1; j < str.length; j++) {
        if (str[j] < str[min]) {
            min = j;
        }

        ii++;
    }

    let tmp = str[i];
    str[i] = str[min];
    str[min] = tmp;
}

console.log(str.join(""));
console.log("length", str.length, "runs", ii);