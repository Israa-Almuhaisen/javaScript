
// 1
// Correct the syntax error
//  [ 1,7  9  45, ]
//  ["Str" "alex","moh"
//  'the','fox' 'over' lazy, 'dog',  ]
// */
// var x=[ 1,7,9,45];
// var j=["Str","alex","moh"];
// var y=['the','fox','over','lazy','dog'];


/*
2
What the index of "Banana","Tomato"
var fruits=["Tomato","Banana","Watermelon"]
// */
// var fruits=["Tomato","Banana","Watermelon"]
// fruits[0];
// fruits[1];
 


/*
3
Create an array represents your:
1- Favorite Food (5)
2- Favorite Sport (3)
3- Favorite Movie (4)
// */
// var food=["food1","food2","food3","food4","food5"];
// var sport=["sport1","sport2","sport3"];
// var  Movie=["movie1","movie2","movie3"];



/*
4
Create a function called firstOfArray
that take an array as a parameter
and return the first element in an array
Ex: firstOfArray([1,4,5]) => 1
Ex: firstOfArray(["t","u","g","x"]) => "t"
*/
// function firstOfArray(array){
//  var y= array[0];
//     return y;
// }
// console.log (firstOfArray(["t","u","g","x"]));


// 5
// Create a function called lastOfArray
// that take an array as a parameter
// and return the first element in an array
// Ex: lastOfArray([1,4,5]) => 5
// Ex: lastOfArray(["t","u","g","x"]) => "x"



/*
6
Using console make this array to be like this one (push, unshift, shift, pop)
var array = [0,5,7,9]
=> [1,3,4,6,8,9,10]
*/
// var x=[0,5,7,9];
// x.shift(0);
// x.shift();
// x.shift();
// x.push(10);
// x.unshift(8);
// x.unshift(6);
// x.unshift(4);
// x.unshift(3);
// x.unshift(1);
// console.log([x]);




/*
7
Using the console try to figure out what the thing thats (push, unshift, shift, pop) return to you
var array2 = [5,9,-7,3.5]*/

// var array2 =[5,9,-7,3.5];
// console.log(array2);
// array2.push(3);
// console.log(array2);
// array2.unshift(2);
// console.log(array2);
// array2.shift();
// console.log(array2);
// array2.pop();
// console.log(array2);



/*
8
Create a function called middleOfArray
that take an array as a parameter
and return the middle element in an array if it is have an odd elemnets
and return the two middle elemnt in an array if it is have an even elemnets

Ex: middleOfArray([1,4,5]) => 4
Ex: middleOfArray(["t","u","g","x"]) =>"u and g"
*/

function middleOfArray(array11){
    var n= array11.length;
    var f= n/2;
    if (n %2 == 0){
        var y =array11[n];
        return y;
    }
    // else{
    //     var y= array11[]
    // }
}
console.log(middleOfArray(["a","b","d,e"]));


/*
9
Using assignment operator (=)
make the animals array have these animals
var animals = ['cat', 'ele', 'bird']
animals; => ['zebra', 'elephant']
** hint: animals[0]=something


var nums= [1,2,3,8,9]
nums => [5,-22,3.5,44,98,44]
*/


/*
10
Create a function called indexOfArray
that accept an array and index
and return what this array have in this index

var nums= [1,2,3,8,9]
Ex: indexOfArray(nums,3) => 8
Ex: indexOfArray(nums,1) => 2
Ex: indexOfArray(nums,4) => 9

**try more cases by your self
*/
