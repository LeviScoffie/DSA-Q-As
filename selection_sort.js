function selectionSort(arr){
    let sortedArr = []
    console.log(arr)
    while(arr.length>0){
        const indexMin = getMinIndex(arr)
        sortedArr.push(arr.splice(indexMin, 1)[0]);
        // Log both the unsorted and sorted arrays
        console.log("Unsorted:",arr);
        console.log("Sorted:", sortedArr);
    }
    console.log(`Final Sorted Array: ${sortedArr.join(", ")}`);
    return sortedArr;
}

function getMinIndex(arr){
    let indexMin = 0;
    for (let i=1; i<arr.length; i++){
        if(arr[i] < arr[indexMin]){
            indexMin = i
        }
    }
    return indexMin
}
numbers= [34,133,131,11,136,72,985,1246,23158,33333,1221,5673,4356]
selectionSort(numbers)
