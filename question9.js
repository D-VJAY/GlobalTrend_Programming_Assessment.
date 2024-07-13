//Function that filters out even number


function filterEven(array){
    let output=[];
    for(let i=0;i<array.length;i++){
        if(array[i]%2==0){
            output.push(array[i]);
        }
    }
    return console.log(output);
}

filterEven([1,2,3,4,5,6,7,8,9,10])

