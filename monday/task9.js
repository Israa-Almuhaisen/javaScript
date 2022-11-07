var x=Number(prompt("insert your age")) ;

function canIGetADrivingLicense(x){
    if(x>=20){
        console.log("yes you can");
    }
    else {
            var y =20-x;
            console.log(`please come back after ${y} years to get one`);
        }
}
canIGetADrivingLicense(x);