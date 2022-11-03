o= prompt(`Enter oprate value`);
x= Number(prompt(`Enter first number`));
y= Number(prompt(`Enter second number`));
result= "";

if( o == `+`){result= x+y;}
else if(o == '-'){result= x-y;}
else if(o == '*'){result= x*y;}
else if(o == '/'){result= x/y;}
else{alert("Please enter a valid operator");}
document.getElementById(`operation-result`).innerText= x+o+y+` = `+result;
console.log(x+o+y+'='+result);


