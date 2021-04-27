var expected = {foo: 5, bar: 6};
var actual = {foo: 5, bar: 6};

function assertObjectsEqual(expected, actual){
    if(JSON.stringify(expected) === JSON.stringify(actual))
    {
        return "Passed";
    }
    else
    {
        return `FAILED. Expected ${JSON.stringify( expected)} but  got ${JSON.stringify(actual)}`; 
    }   
}
console.log('***Using JSON.stringify and checking whether the expected and actual values are equal***')
console.log(assertObjectsEqual(expected,actual));
