function selectionSort(a){
    for(let i=0;i<a.length-1;i++){
        let min=i;
        for(let j=i+1;j<a.length;j++){
            if(a[j] < a[min]){
                min=j;
            }
        }
        if(min != i){
            let temp = a[i];
            a[i] = a[min];
            a[min] = temp;
        }
    }
    return a;
}


const a=[7,4,10,8,3,1]
console.log(selectionSort(a));