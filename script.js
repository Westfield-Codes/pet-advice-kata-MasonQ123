/* Pet Advice Kata */

/* Var, Prompt, Confirm, Alert, Compound Conditional */

// Create pet variable, set equal to empty quotes ("")
var pet = "";
// Ask if they are allergic, store in a boolean variable with OK/Cancel
var allergic = confirm("Are you allergic?");
// If they are allergic, ask if they want a cute pet, store in a boolean variable with OK/Cancel
if (allergic == true) {
    let cute = confirm("Do you want a cute pet?");
    if (cute == true){
        pet = "hamster";
    }
    else{
        pet="tarantula";
    }
}
else {
    var outdoors = confirm("Do you want to be outdoors with your pet?");

if (outdoors == true){
    pet = "dog";
}
else{
    pet = "cat";
}
}
// If they are not allergic, ask if they want to be outdoors with their pet.  Store it in a boolean with OK/Cancel.
// If allergic and cute, pet =  bird
// Else if allergic and not cute,  pet =  tarantula
// Else if not allergic and outdoors,  pet =  dog
// Else if not allergic and indoors,  pet =  cat 
// Display the type of pet: You would do well with a pet
alert("You should go with a " + pet + ".")
// Ask for a pet name for the pet starting with the same letter as the pet starts with
var pname = prompt("...and what about their name?");
// Display petname the pet says hi. 
alert(pname + " the " + pet + " says hi!");

