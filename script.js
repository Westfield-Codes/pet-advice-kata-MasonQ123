/* Pet Advice Kata */

/* Var, Prompt, Confirm, Alert, Compound Conditional */

// Create pet variable, set equal to empty quotes ("")
var pet = "";
// Ask if they are allergic, store in a boolean variable with OK/Cancel
var allergic = confirm("Are you allergic?");
// If they are allergic, ask if they want a cute pet, store in a boolean variable with OK/Cancel
if (allergic == true) {
    var cute = confirm("Do you want a cute pet?");
};
// If they are not allergic, ask if they want to be outdoors with their pet.  Store it in a boolean with OK/Cancel.
if (allergic == false) {
    var outdoors = confirm("Do you want to be outdoors with your pet?");
}; 
// If allergic and cute, pet =  bird
if (cute == true) {
    pet = "bird";
};
// Else if allergic and not cute,  pet =  tarantula
else (pet = "tarantula"){
}
// Else if not allergic and outdoors,  pet =  dog

// Else if not allergic and indoors,  pet =  cat 

// Display the type of pet: You would do well with a pet

// Ask for a pet name for the pet starting with the same letter as the pet starts with

// Display petname the pet says hi. 
