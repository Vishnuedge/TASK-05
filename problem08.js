var securityQuestions = [
    {
    question: "What was your first pet’s name?",
    expectedAnswer: "FlufferNutter"
    },
    {
    question: "What was the model year of your first car?",
    expectedAnswer: "1985"
    },
    {
    question: "What city were you born in?",
    expectedAnswer: "NYC"
    }
]
var q = "What was your first pet’s name?";
var a  = "FlufferNutter";

function chksecurityQuestions(securityQuestions, ques, ans){
    var status = null;
    for(var i =0 ; i < securityQuestions.length; i++){
        if(securityQuestions[i].question === ques && securityQuestions[i].expectedAnswer === ans)
        {
            status = "Right";
        }
    }
    if(status === "Right") 
    {
        return true;
    }
    else {
        return false;
    }
}
console.log("***take the object and a pair of strings and return if the quest is present and if its valid answer***")
console.log(chksecurityQuestions(securityQuestions,q,a));
