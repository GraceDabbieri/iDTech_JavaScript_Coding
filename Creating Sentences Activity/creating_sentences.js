let words = ["this", "is", "JavaScript"];
let sentense = [];
let wLen = words.length-1;
function createSentense(array){
for(let i = 0; i <=wLen; i ++){
sentense.push(words[i]);
}
return sentense;
}
console.log(createSentense(words));