/*js for validating contact form and create alert boxes  */
function validateForm() {
    var firstname = document.forms["messageForm"]["firstname"].value;
    var lastname = document.forms["messageForm"]["lastname"].value;
    var country = document.forms["messageForm"]["country"].value;
    var address = document.forms["messageForm"]["address"].value;
    var email = document.forms["messageForm"]["email"].value;
    var gender = document.forms["messageForm"]["gender"].value;
    var message = document.forms["messageForm"]["message"].value;
   
    if(firstname == "" || lastname == "" || country == "" || email == "" || message == ""){ // using if/else loop to check empty fields
        alert("Empty fields found. Please fill all fields.");       //creating alert box if all field are null or empty
    }
    else{
        alert(" Message sent!! Thank you for messaging.");          //creating alert box if all the fields are properly filled    
    }
}

/*js for read more and
        read less options */
var i = 0;
function read() {
    if(!i) { // using if/else loop
        document.getElementById("more").style.display = "inline";
            
        document.getElementById("dots").style.display = "none";
            
        document.getElementById("readmore").innerHTML = "Read Less"; //
        
        i = 1;
    }

    else {
        document.getElementById("more").style.display = "none";
            
        document.getElementById("dots").style.display = "inline";
            
        document.getElementById("readmore").innerHTML = "Read More";
        i = 0;
    }
}
