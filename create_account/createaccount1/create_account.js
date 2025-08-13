   function verifypassword(){
      var password =document.getElementById("password").value;
      var userError =document.getElementById("userError");

    var  regExp="/(?=.*(A-Z)\W(4,15))/"

     if(password.match("regExp")){
        userError.innerHTML=""
     }else{
        userError.innerHTML=" try some other"
     }

   }



   function verifyname(){
        var name =document.getElementById("name").value;
        var userError=document.getElementById("userError");
          var charcode =name.charCodeAt(0);
          if(charcode >=65 && charcode <= 90){
            userError.innerHTML="";
          }else{
            userError.innerHTML="first letter capital"
          }
          
    }


    
      function verifyuserEmail(){
            var userEmail =document.getElementById("email").value;
            var userError= document.getElementById("userError");
            if(userEmail.endsWith("@gamil.com")){
                userError.innerHTML=""
            }else{
                userError.innerHTML="Email must  ends with an @gmail.com";
            }
        }
