var object = {name: 'RajiniKanth', age: 33, hasPets : false};

function printAllValues(obj) {
    var arr = [];
    for(var i in obj){
        arr.push(obj[i]);
    }
    return arr;
   }
console.log(printAllValues(object));