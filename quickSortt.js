function partition(arr,low,high){
    let pivot=arr[low];
    let start=low;
    let end=high;
    while(start<end){
        while(arr[start] <= pivot){
            start++;
        }
        while(arr[end] > pivot){
            end--;
        }
        if(start<end){
            [arr[start], arr[end]] = [arr[end], arr[start]];
        }
    }
    [arr[low], arr[end]] = [arr[end], arr[low]];
    return end;
}
function quickSort(arr,low,high){
if(low<high){
    let pi=partition(arr,low,high);
    quickSort(arr,low,pi-1)
    quickSort(arr,pi+1,high)
}
}
let arr=[7,6,10,5,9,2,1,15,7];
let N=arr.length;
quickSort(arr,0,N-1)
console.log(arr.join(','));
