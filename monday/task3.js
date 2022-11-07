var x=prompt("plz insert ypur age");
var y=prompt("insert sleep hour per day");


function calculateSupply(x,y){
  var j = (100-Number(x))*365*y;
  console.log(`You will need ${j} sleep hour to last you until the ripe old age of 100`);
}

 calculateSupply(x,y);