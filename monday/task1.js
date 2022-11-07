"use strict";
var x= prompt("plz insert your job_title");
var y= prompt("plz insert yourgeographic_location");
var z= prompt("plz insert your partners_name");
var j= prompt("plz insert your number_of_children");



function tellfortune (x,y,z,j){
  console.log(`You will be a${x } in ${y}  ,and married to ${z} with ${j}`);
}

// tellfortune("doctor","aqaba","reem",3);
console.log(tellfortune(x,y,z,j));
