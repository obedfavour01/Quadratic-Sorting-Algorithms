function selectionSort(arr){
    for (let i = 0; i < arr.length; i++){
     let minVal = i;
    for(let j = i+1; j < arr.length; j++){
        console.log(arr, arr[minVal],arr[j])
       
        if(arr[j] < arr[minVal]){
            minVal = j
        }
        
    }

    //swap(arr,arr[i],minVal)
    //swap only if i is not the minimum value
    if(i !== minVal){
        let temp = arr[minVal]
        arr[minVal] = arr[i]
        arr[i] = temp
 
    }
 }
   return arr
}


function selectionSort(arr){
    for(let i = 0; i < arr.length; i++){
        let minval = i
        for(let j = i + 1; j< arr.length;j++){
            if(arr[j] > arr[minval]){
                minval = j
            }
        }

        let temp = arr[i]
       arr[i] = arr[minval]
       arr[minval] = temp
    }
}


function swap(arr, idx1, idx2){
    let temp = arr[idx1]
    arr[idx1] =  arr[idx2]
    arr[idx2] = temp
}
console.log(selectionSort([4,3,7,6]))



function selectSorting(arr){
    for(let i = 0; i < arr.length; i++){
        let minVal = i

        for(let j = i + 1; j < arr.length ; j++){
            if(arr[j] > arr[minVal]){
                minVal = j 
           }
        }
        let temp = arr[i]
        arr[i] = arr[minVal]
        arr[minVal] = temp
    }

    return arr
}

