function bubbleSort(arr){
    for(let i = 0; i < arr.length; i++){
        for(let j = i + 1; j < arr.length; j++){
            // console.log(arr, arr[i],arr[j])
                if(arr[i] > arr[j]){
                    swap(arr,i,j)
                } 
        }
    }

    return arr
}

function bubble(arr){
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr.length; j++){
            //  console.log(arr, arr[j],arr[j + 1])

           if(arr[j] > arr[j+1]){
            swap(arr,j,j+1)
           }
        }
    }
    return arr
}
function optimizedBubble(arr){
    // In the bubble sort algo it is obvious that the highest values find 
//themselves bubbling to the top of 
//the array, hence we could reduce the number of iteration.
// Time complexity : 0(n^2)
//we can start from the back 
    for(let i = arr.length; i > 0; i--){
        for(let j = 0; j < i - 1; j++){
            console.log(arr, arr[j],arr[j+1])
            if(arr[j] > arr[j + 1]){
                swap(arr, j , j+1)
            }
        }

        console.log('new level')
    }
    return arr
}


function optimizedBubbleSwaps(arr){
// Time complexity : 0(2n)
    //This is primarily for nearly sorted arrays
    //Its basically saying if you didnt swap in this round of the looop 
    //You are definitely not swapping in the next round, hence end the loop
    for(let i = arr.length; i > 0; i--){
        let noSwap = true
        for(let j = 0; j < i - 1; j++){

            if(arr[j] > arr[j + 1]){
                swap(arr,arr[j],arr[j + 1])
                 noSwap = false
        
            }
        }
        if(noSwap){
            break;
        }
    }
    return arr
}
 function swap(arr, idx1, idx2){
    let temp = arr[idx1]
    arr[idx1] =  arr[idx2]
    arr[idx2] = temp
}


console.log(bubbleSort([4,3,-1,2,13,9]))
console.log(bubble([4,2,9,0,-6,47,1]))
console.log(optimizedBubble([4,2,9,0,-6,47,1]))
console.log(optimizedBubbleSwaps[7,1,3,4,0])


//we can start from the back 

//ES 2015 swap

// const swap = (arr,idx1,idx2) => {
//     [arr[idx1],arr[idx2]] = [arr[idx2],arr[idx1]]
// }