let str = "sortexample".split("");

for (let i = 0; i < str.length; i++) {
    j = i;
    while ( j > 0 && str[j] < str[j - 1]) {
        exchange(str, j, j - 1);
        j--;
    }
}

function exchange(str, i, j) {
    let tmp = str[j];
    str[j] = str[i];
    str[i] = tmp;
}

console.log(str.join(""));