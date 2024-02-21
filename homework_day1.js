//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
`Matched ${dog_name}` if name is in the string, if its not a match console.log "No Match"
*/
// let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
// let dog_names = ["Max","HAS","PuRple","dog"]
let dog_string = "Hello Max, my name is Dog, and I have purple eyes!";
let dog_names = ["Max","HAS","PuRple","dog"];
function findWords(){

    for(let dog of dog_names )
    {
         if(dog_string.toLowerCase().includes(dog.toLowerCase()))
    {
            console.log(`Matched ${dog}`);
    }
    else{
        console.log(`No Match`);
    }
    }
}
console.log(findWords());

//Call method here with parameters


//============Exercise #2 ============//
/*Write a function that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */

//Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]

//Expected output
//Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
//Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]

let arr = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"];
function replaceEvens(arr){
    //code goes here
    for(let i=0 ; i<arr.length ; i+=2)
    {
        arr.splice(i, 1, 'even index'); 
    }
    console.log(arr);
}

console.log(replaceEvens(arr));



/*
CODEWARS Solutions : 
https://www.codewars.com/kata/56d6c333c9ae3fc32800070f
https://www.codewars.com/kata/5708f682c69b48047b000e07

*/