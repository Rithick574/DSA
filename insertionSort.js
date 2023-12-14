function insertionSort(arr){
for(i=1;i<arr.length;i++){
    let temp=arr[i];
    let j=i-1;
    while(j >= 0 && arr[j]>temp){
        arr[j+1]=arr[j]
        j--;
    }
    arr[j+1] = temp;
}
return arr;
}

const arr=[5,4,10,1,6,2]
console.log(insertionSort(arr));