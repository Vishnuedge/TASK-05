var arr = [['make', 'Ford'], ['model', 'Mustang'], ['year', 1964]];
function fromListToObject(arr) {
 var newObject = {};
 for(var i = 0; i <= 2; i++)
 { 
    newObject[arr[i][0]] = `${arr[i][1]}`;
 }
 return newObject;
}
console.log(fromListToObject(arr));