//1
function countToTen(){
  for(let i = 1; i <= 10; i++){
      console.log(i)
  }
}

//2
function countFromOne(num){
  for(let i = 1; i <= num; i++){
      console.log(i)
  }
}

//3
function countEveryEven(even){
  for(let i = 1; i <= even; i++){
      if(i % 2 === 0){
          console.log(i)
      }
  }
}

//4
function countEveryOdd(odd){
  for(let i = 1; i<= odd; i++){
      if(i %2 != 0){
          console.log(i)
      }
  }
}

//5 
function countEvens(arr){
  let evenCount = 0
  for(let i = 0; i<= arr.length; i++){
      if(i %2 === 0){
          evenCount++
      }
  } return evenCount
}