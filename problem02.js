var object = {name : 'RajiniKanth', age : 25, hasPets : true}

function printAllKeys(obj) {
    var arr = [];
    arr.push(Object.keys(obj));
    return arr;

   }
   console.log(printAllKeys(object));