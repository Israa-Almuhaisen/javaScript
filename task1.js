var x=Number(prompt("Enter the first  value"));
var y=Number((prompt("Enter the second value")));
console.log(x,y)
if (x>y) {
    document.getElementById(`output`).innerText = 'Hello World';    
}
else{
    document.getElementById(`output`).innerText = 'Goodbye';
}
