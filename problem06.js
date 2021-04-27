var arr= [[
    ["firstName", "Vasanth"], ["lastName", "Raja"], ["age", 24], ["role", "JSWizard"]
  ], 
  [
    ["firstName", "Sri"], ["lastName", "Devi"], ["age", 28], ["role", "Coder"]
  ]
];

function transformEmployeeData(arr) {
var tranformEmployeeList = [];
for(i=0;i<2;i++)
{
let fromListToObject = function(arr) {
var newObject = {};
arr.map(val => newObject[val[0]]=val[1]);
return newObject;
}
tranformEmployeeList.push(fromListToObject(arr[i]));
}
return tranformEmployeeList;
}
console.log("***Parsing a list of lists and converted into a JSON object***")
console.log(transformEmployeeData(arr));
