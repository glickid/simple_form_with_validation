// Code goes here

function myFunction() {
    document.getElementById("registrationForm").reset();
}

function validateNameLegth()
{
    var name = document.getElementById("name");

    if (name.value.length < 30)
    {
        name.setCustomValidity("");
        return(true);
    }

    name.setCustomValidity("Name expected to be less than 30 charachters");
    document.getElementById("submitButton").click();
    return(false);
}

function ValidateEmail() 
{
    var email = document.getElementById("email");

    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value))
    {
        email.setCustomValidity("");
        return (true);
    }

    if (email.value.length>30)
    {
        email.setCustomValidity("Email is too long (more than 30 charachters)");
        return(false);
    }

    email.setCustomValidity("You have entered an invalid email address!");
    document.getElementById("submitButton").click();

    return (false);
}

function CheckPassword() 
{ 
    var pwd = document.getElementById("password");

    if (/^[A-Za-z]\w{7,15}$/.test(pwd.value))
    { 
        pwd.setCustomValidity("");
        return true;
    }
    else
    { 
        pwd.setCustomValidity("Please enetr a valid password 7-15 charchters/digits, first charchter must be a letter!")
        document.getElementById("submitButton").click();
        return false;
    }
}

function CheckPasswordMatch ()
{
    var pwd = document.getElementById("password");
    var pwd2 = document.getElementById("password2");

    if (pwd.value == pwd2.value)
    {
        pwd2.setCustomValidity("");
        return true;
    }
    else
    {
        pwd2.setCustomValidity("Re-entered password not match password!");
        document.getElementById("submitButton").click();
        return false;
    }
}

function checkDescription()
{
    var input = document.getElementById("selfDescribe"); 

    if (input.value.length>10)
    {
        input.setCustomValidity("");
        return(true);
    }

    input.setCustomValidity("Please enter at least 10 charachters.");
    return(false);
}

