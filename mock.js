let arr = [3, 5, 2, 5, 2, 7, 5, 8];

mergeSort(arr.length - 1, arr)
console.log(arr)

function mergeSort(s, arr) {
    recursion(0, s - 1);
    function recursion(l, h) {
        if (l === h) return; // Base condition
        let mid = Math.floor((l + h) / 2);
        recursion(l, mid); // Recursion for left part
        recursion(mid + 1, h); // Recursion for right part
        merge(arr, l, mid, h);
    }
    // console.log(arr.join(' '));
}

function merge(arr, l, mid, h) {
    let lA = arr.slice(l, mid + 1);
    let rA = arr.slice(mid + 1, h + 1);
    let ind = l;
    let lAi = 0;
    let rAi = 0;
    while (lAi < lA.length && rAi < rA.length) {
        if (lA[lAi] <= rA[rAi]) {
            arr[ind] = lA[lAi];
            lAi++;
        } else {
            arr[ind] = rA[rAi];
            rAi++;
        }
        ind++;
    }
    while (lAi < lA.length) {
        arr[ind++] = lA[lAi++];
    }
    while (rAi < rA.length) {
        arr[ind++] = rA[rAi++];
    }
}



