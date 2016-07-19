const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter a grade:',(grade) =>{
  // TODO: Log the answer in a database
  

    var grade = parseInt(grade);
    console.log(grade);
    
    deductgrade(grade,3);
    deductgrade(grade,2);
    deductgrade(grade,3;
    deductgrade(grade,5;
    
    
    
     rl.close();
});
function deductfgrade(grade,decrement){
    var test = grade - decrement;
      var test2 = grade  + increment;
    
    if(test1<75){
        console.log(decrement);
    }
    else if(test1>=75){
        console.log(increment);
    }
    module.exports = {
        computegrade :grades
    }
}
