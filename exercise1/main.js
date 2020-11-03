

function validation()
{
    var first = document.getElementById("firstEnter").value;
    var second = document.getElementById("secondEnter").value;
    
    if(first === second) 
    {
        alert(first);
        alert("Password is valid");
    }
    else 
    {
        alert("Password is NOT valid");
    }
}