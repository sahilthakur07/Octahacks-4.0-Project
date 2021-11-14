 $(document).ready(function(){
    $("input").focus(function(){
    $(this).css("color", "black");
    });
    });
	
	
function matchpassword(){
  var firstpassword=f1.password1.value;
  var secondpassword=f1.password2.value;
  if(firstpassword==secondpassword)
  {
        alert("Account created successfully!!");
  }
  else
  {
       alert("Passwords does not match!");
  }
}
        
