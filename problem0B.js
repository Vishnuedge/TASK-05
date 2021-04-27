var cat = {
    name: "Fluffy",
    activities: ['play', 'eat cat food'],
    catFriends: [
    {
    name: 'bar',
    activities: ['be grumpy', 'eat bread omblet'],
    weight: 8,
    furcolor: 'white'
    }, 
    {
    name: 'foo',
    activities: ['sleep', 'pre-sleep naps'],
    weight: 3
    }
    ]
   }
   
   
//ADDING CAT HEIGHT AND WEIGHT:
   
cat.height = 2.5;
cat.weight = 10+"Kg";
   
//UPDATING CAT'S NAME:
cat.name = "Fluffyy";
   
//FLUFFYY'S CAT FRIENDS ACTIVITIES:
for(var i=0; i < 2;i++)
    {
        console.log(cat.catFriends[i].activities);
    }
       
//TOTAL WEIGHT OF CAT FRIENDS :
   
for(var i=0; i < 1;i++)
   {
       console.log(cat.catFriends[i].weight + cat.catFriends[i+1].weight);
   }
   
//PRINT TOTAL ACTIVITIES OF ALL CAT :
   
    console.log(cat.activities , cat.catFriends[0].activities, cat.catFriends[1].activities);
   
   
// ADD TWO ACTIVITIES TO BAR AND FOO CAT :
var arr1 = ['Eat fish', 'Play with toys'];
   for(var i = 0; i <=1  ; i++)
   {
       cat.catFriends[i].activities.push('Eat fish', 'Play with toys');
   }
   
//UPDATE FUR COLOR OF BAR :
   
cat.catFriends[0].furcolor = "Grey";
   
console.log(cat);