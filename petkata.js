/* Pet Advice Kata */

/* Var, Prompt, Confirm, Alert, Compound Conditional */

// Create pet variable, set equal to empty quotes ("")
var pet = "";
var allergic = confirm("Are you allergic?");
//Ask if allergic is true or false
if (allergic == true) {
//if allergic is true
    let cute = confirm("Do you want a cute pet?");
    //then ask if cute is true
        if (cute == true){
            pet = "hamster";
        }
        //if cute is true then output hamster
        else{
            pet="tarantula";
        }
        //otherwise output tarantula
}
else {
//if allergic was false
    var outdoors = confirm("Do you want to be outdoors with your pet?");
    //ask if user wants to be outdoors
        if (outdoors == true){
            pet = "dog";
        }
        //output dog if outdoors is true
        else{
            pet = "cat";
        }
        //otherwise output cat
}

alert("You should go with a " + pet + ".")
//tell user the type of pet
var pname = prompt("...and what about their name?");
//ask for a name
alert(pname + " the " + pet + " says hi!");
//now finally remind them of the name and type by saying "[Name] the [type of pet] says hi!"