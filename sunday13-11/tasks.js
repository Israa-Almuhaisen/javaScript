var oldarray1=[2,5,100];

var newarray1 =oldarray1.map(function doubleNumbers(arr){
   return  arr*2;
  })
  console.log(newarray1);
  
//   ____________________________________________________

var oldarray2=[2,5,100];

var newarray2 =oldarray2.map(function stringItUp(arr){
    return arr.toString();
})
    console.log(newarray2);

// __________________________________________

var oldarray3=["john", "JACOB", "jinGleHeimer", "schmidt"];

var newarray3 =oldarray3.map(function capitalizeNames(arr){

    var y = arr.toLowerCase();
    var x = y.split("");
    x[0]= x[0].toUpperCase();
    newarray3=x.join("");
   return x.join("");

}
)
console.log(newarray3);
  
// ______________________________________________________
function namesOnly(arr){
    let result = arr.map(ele => ele.name)
    return result
  }

  console.log(namesOnly([
   {
       name: "Angelina Jolie",
       age: 80
   },
   {
       name: "Eric Jones",
       age: 2
   },
   {
       name: "Paris Hilton",
       age: 5
   },
   {
       name: "Kayne West",
       age: 16
   },
   {
       name: "Bob Ziroll",
       age: 100
   }
   ])); 