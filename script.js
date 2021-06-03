console.log("Hello World")
function validate(){
    if(document.forms.fname.value == ""){
        alert("Please provide your name!" );
        document.forms.fname.focus();
        return false;
    }

    if(document.forms.lname.value == ""){
        alert("Please provide your name!" );
        document.forms.lname.focus();
        return false;
    }
    if(document.forms.blood-group.value == "" || isNaN(document.forms.blood-group.value)||document.forms.blood-group.length !=10){
        alert("Please provide blood group in alphabatically." );
        document.forms.blood-group.focus();
        return false;
    }
    if(document.forms.date.value == ""){
        alert("Please provide your date in form of DD/MM/YYYY." );
        document.forms.date.focus();
        return false;
    }
    if(document.forms.number.value == ""){
        alert("Please provide your number" );
        document.forms.number.focus();
        return false;
    }
    if(document.forms.email.value == ""){
        alert("Please provide your email!" );
        document.forms.email.focus();
        return false;
    }
    return(true);
}