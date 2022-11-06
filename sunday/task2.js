counter = 0;
for(i=1;i<5;i++){
    y="";
    for( j=0; j<i ; j++) {
        counter++;
        y+=counter ;
    }  
    console.log(y) ;
}

// for(i=1;i<5;i++){
//     y ="";
//     for( j=0; j<i ; j++) {
//         y += j+i;
//         y += " "
//     }  
//     console.log(y) ;
// }