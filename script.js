// Task 1
// Given a string of odd characters with lengths more than 5 and less than 50. 
//Write a function to extract the middle 3 characters
// Input : “aacjddfdd“
// output : jdd

function task1(str){
 let len = str.length;
 let middle = len / 2;
 console.log(str.charAt(middle));

}
task1('wwordd');
//document.getElementByClass('answer1').innerHTML = ('Banana', task1('banana'));


// Task 2
// Write a function to return if the number is a prime number or not
// Input between- 1 to 100
// Output should be in array , First number tell if its prime number or not and second output tell the next prime number moving towards 100
// For example
// Input : 47  Output ; [true , 53]
// Since 47 is prime number , we returned true and next prime number moving towards 100 is 53

function task2(num){
    for(var i = 2; i < num; i++){
    if(num % i === 0) {
        return false;
    }
    return (num>1) ; 
}
}
console.log(task2(34));
console.log(task2(33));

// work in progress 
function task22(num){
    var prime = true;
    for(i=1;i<=100;i++) { 
        prime = true; 
        for(j=2;j<i;j++) { 
            if(i%j===0) { 
                prime = false; 
                break; 
            } } 
            if(prime === true) {
                 let ar = [i]; 
                

    if (ar.includes('num')){
        let nextPrime = i + 1;
        console.log(ar(i), nextPrime);
        }
    }
            }}
task22(23);

//document.getElementByClass('answer2').innerHTML = ();



// Task 3
// Write a function that calculates a number of digits.This challenge requires you to calculate the run-length encoding of a string. 
//This compresses the string in the following way: wherever there are multiple repeating characters in a string, replace them with the character count along with the original character. 
//For example: the string "aaabbc" results in an encoding of "3a2b1c" You can see that the count comes first followed by the character.

function task3(str){
        let n = str.length;
        for (let i = 0; i < n; i++)
        {
         let count = 1;
            while (i < n - 1 && str[i] == str[i+1])
            {
                count++;
                i++;
            }
        console.log(count,str[i]);
 
        }
    }
    task3("aaabbc");



//document.getElementByClass('answer3').innerHTML = ();

// Task 4 
// Given a string of input of word consisting entirely of alphabets .
// For each alphabet in input , you have to do two things
// change alphabet to next alphabet – Ex “a” become “b” , “d” become “e”
// If its lower case it becomes uppercase and vice versa
// Ex Input - chIme
// Output-- DImNF
// first letter c become capital D
// second letter h becomes capital I
// third l become small m

function task4(str){

}


//document.getElementByClass('answer4').innerHTML = ()
