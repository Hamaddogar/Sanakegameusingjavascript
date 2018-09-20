function submitform()
{
    
 var userNamee= document.getElementById("userName").value;
 if (userNamee == "")
 document.getElementById("nameError").innerHTML="Enter your Name";

return false;



}