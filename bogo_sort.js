function shuffle(array){
    let swapIndex = array.length;
    let temp;
    let randomIndex;
    while (swapIndex !== 0){
        randomIndex = Math.floor(Math.random()* swapIndex);
        swapIndex -=1;
        temp = array[swapIndex]
        array[swapIndex] = array[randomIndex];
        array[randomIndex]= temp;
       
    }
    return array;
}
function isSorted(arr){
    for(let i=1; i< arr.length; i++){
        if (arr[i-1] > arr[i]){
            return false;
        }
    }
    return true;
}
function bogoSort(arr){
    let sorts =0
    while(!isSorted(arr)){
        arr = shuffle(arr);
        sorts +=1;
    }
    console.log(`Sorted after ${sorts} iterations.`);
    return arr;
}

const testValues = [29, 100, 1, 2, 57];
let sorted = bogoSort(testValues);
console.log(sorted);

