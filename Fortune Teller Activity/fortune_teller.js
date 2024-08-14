let fortune = 7
if(fortune >= 0 && fortune <= 3){
console.log("You have a low fortune.");
}
else if(fortune > 3 && fortune <=7){
console.log("You have an average fortune.");
}
else if(fortune > 7 && fortune <=10){
console.log("You have a great fortune.");
}
else{
console.log("Number out of range. Please only use 1 through 10.")
}