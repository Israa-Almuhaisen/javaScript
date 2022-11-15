case1
 arr =[1,2,3];
 arr.forEach(function(element,index,arr){
        arr[index]= element*2;
    });
console.log(arr)

// case2
// arr =[5,1,2,3,10];
// arr.forEach(function(element,index,arr){
//        arr[index]= element*2;
//    });
// console.log(arr)

// ____________________________________________task2___________________________________
case1
arr =[1,2,3];
arr.forEach(function(element,index,arr){
    if (arr[index]%2==0){
        console.log(arr[index]);}
    else{

    }
   });

// case2
// arr =[5,1,2,3,10];
// arr.forEach(function(element,index,arr){
//     if (arr[index]%2==0){
//         console.log(arr[index]);}
//     else{

//     }
//    });
// _________________________________task3_____________________________________________________
function showFirstAndLast(arr){
  let newArray = []
  let y = arr.forEach(element => {
    element.split("")
    let firstAndLast = element[0].concat(element[element.length-1])
    newArray.push(firstAndLast)
   });
   console.log(newArray);
}

showFirstAndLast(['colt','matt', 'tim', 'udemy'])

// ____________________________________task4_______________________________________________________

