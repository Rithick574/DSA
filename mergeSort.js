function mergeSort(arr, low, mid, high) {
    if (low === undefined) low = 0;
    if (mid === undefined) mid = Math.floor((arr.length - 1) / 2);
    if (high === undefined) high = arr.length - 1;

    if (low < high) {
        let i = low; 
        let j = mid + 1;
        let k = low;
        let b = Array.from(arr); 

        while (i <= mid && j <= high) {
            if (b[i] <= b[j]) {
                arr[k] = b[i];
                i++;
            } else {
                arr[k] = b[j];
                j++;
            }
            k++;
        }

        while (i <= mid) {
            arr[k] = b[i];
            i++;
            k++;
        }

        while (j <= high) {
            arr[k] = b[j];
            j++;
            k++;
        }
    }
}

const arr = [12, 11, 13, 5, 6, 7];
mergeSort(arr);
console.log(arr.join(','));
