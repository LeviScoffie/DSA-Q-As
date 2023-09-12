function quickSort(arr) {
    if (arr.length <= 1) {
        // Base case: Return the array as a string if it's empty or has only one element.
        console.log(`Returning: [${arr.join(', ')}]`);
        return arr.join(', ');
    }

    const lessThanPivot = [];
    const greaterThanPivot = [];
  //  const randomIndex = Math.floor(Math.random() * arr.length);
    const pivot = arr[0];
    arr.splice(0, 1);
    //console.log(`Unsorted Sublist: [${arr.join(', ')}]`);
    for (const value of arr) {
        if (value <= pivot) {
            lessThanPivot.push(value);
           // console.log(`lessThanSublist:[${lessThanPivot.join(', ')}]`)
        } else {
            greaterThanPivot.push(value);
           // console.log(`greaterThanSublist:[${greaterThanPivot.join(', ')}]`)
        }
   
    }
    console.log(...lessThanPivot,pivot, ...greaterThanPivot)
    // Recursively sort and concatenate the subarrays along with the pivot.
    return quickSort(lessThanPivot) + `, ${pivot},` + quickSort(greaterThanPivot);
}

const numbers = [3314, 133, 131, 11, 136, 72, 985, 1246, 23158, 33333, 1221, 5673, 4356];
console.log(quickSort([...numbers]));
