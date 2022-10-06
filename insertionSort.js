function insertionSort(arr){
	var currentVal;
    for(var i = 1; i < arr.length; i++){
        currentVal = arr[i];
        let j;
        for( j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
            console.log(arr,j)
            arr[j+1] = arr[j]
        }   
        arr[j+1] = currentVal;
    }
    return arr;         
}
console.log(insertionSort([2,1,9,76,4]))

// currentVal = 1; j = ;
//[2,2,9,76,4]
//[1,2,9,76,4]
//currVal = 9 ;
//[1,2,9,76,4]
//currVal = 76;
//[1,2,9,76,4]
//currVal = 4
// (1) [1,2,9,76,4] // arr[j = 3] > 4
//(2) [1,2,9,76,76] // arr[j =2] > 4 hence it yields the next array
//(3) [1,2,9,9,76] //  // arr[j = 1] < 4 hence the loop stops
//(4) [1,2,4,9,76]


function insertionSorting(arr){
    for(let i = 1; i < arr.length; i++){
        let currentVal = arr[i]
        for(let j = i - 1; j >= 0 && arr[j] > currentVal; j-- ){
            arr[j + 1] = arr[j]
        }

        arr[j + 1] = currentVal
    }

    return arr
}