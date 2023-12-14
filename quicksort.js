class Sort{
   quickSort(arr) {
    quickSortHelper(arr,startIdx=0,arr.length-1)
    return arr;
    }
    quickSortHelper(arr,startIdx,endIdx){
      if(startIdx >= endIdx){
        return;
      }
      let pivotIdx=startIdx;
      let leftIdx=startIdx+1
      let rightIdx= endIdx;
      while (leftIdx<=rightIdx){
        if(arr[leftIdx] > arr[pivotIdx] && arr[rightIdx] < arr[pivotIdx]){
            swap(arr,leftIdx,rightIdx);
            leftIdx++;
            rightIdx--;
        }
        if(arr[leftIdx] <= arr[pivotIdx]){
            leftIdx++;
        }
        if(arr[rightIdx] >= arr[pivotIdx]){
            rightIdx--;
        }
      }
      swap(arr,rightIdx,pivotIdx)
      quickSortHelper(arr,leftIdx,rightIdx-1)
      quickSortHelper(arr,rightIdx+1,endIdx)

    }

    swap(arr,i,j){
        temp=arr[i];
        arr[i]=arr[j];
        arr[j]=temp;
    }
}


const arr=[30,2,41,56,12,11,22,41]
const b=new Sort()
const result=b.quickSort(arr);