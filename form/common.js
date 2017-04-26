
   var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    myForm = function(){
	  event.preventDefault();
	  var fistName=document.getElementById('firstName');
	  var lastName=document.getElementById('lastName');
	  var email=document.getElementById('email');
		
	  firstName.classList.remove("error");
	  lastName.classList.remove("error");
	  email.classList.remove("error");
	  email.classList.remove("error-label");
	  document.getElementById('empy-firstName').style.display="none";
	  document.getElementById('empy-lastName').style.display="none";
      document.getElementById('empy-email').style.display="none";
	  document.getElementById('empy-email').style.display="none";
	  document.getElementById('incorrectly').style.display="none";	
			
	  var formIsValid=true;

	  if(fistName.value==""){
		  fistName.className = ("error");
		  document.getElementById('empy-firstName').style.display="block";
		  formIsValid=false;
		}
	  if(lastName.value==""){
		  lastName.className = ("error");
		  document.getElementById('empy-lastName').style.display="block";
		  formIsValid=false;
		}
	  if(email.value==""){
		  email.className = ("error");
		  document.getElementById('empy-email').style.display="block";
		  formIsValid=false;
		}

	  if(email.value!="" && !re.test(email.value)){
		     email.className = ("error-label");
		     document.getElementById('incorrectly').style.display="block" ;
		     formIsValid=false;
	  }  

      if(formIsValid){
		setTimeout(function(){ alert("Форма валидная")}, 100)  ; 
	}
   
  }