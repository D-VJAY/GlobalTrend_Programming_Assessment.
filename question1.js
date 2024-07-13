//Print "Fizz" for the Multiple of 3
//Print "Buzz" for the Multiple of 5
//Print "FizzBuzz" for the Multiple of both 3 and 5
console.log("question1")

for(let i=1;i<=100;i++){
    if(i%3 ==0 && i%5==0){
        console.log("FizzBuzz");
    }else if(i%3==0){
          console.log("Fizz");
    }else if(i%5==0){
        console.log("Buzz");
    }else{
        console.log(i);
    }
}