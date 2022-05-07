let array = [1, 2, 45, 6, 7, 8, 6, 34, 532, 45, 4]

function insertSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let current = arr[i];
        let j = i - 1;

        while(j>=0 && arr[j]> current){
            arr[j + 1] = arr[j]
            j--
        }
        arr[j+1] = current
    }
    return arr
}

console.log(insertSort(array))
