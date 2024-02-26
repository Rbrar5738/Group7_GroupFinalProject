
/********************************************************************/
/* Student Name : Ravinder Singh                                    */
/* Studetn Id   : 8915738                                           */
/********************************************************************/



"use strict";
$(document).ready( () => {
/*********Code to move focus to the E-Mail Field********/
    $("#e_mail").focus();    


  $("#confirm").blur(function()
        {
            if($("#confirm").val() != $("#password").val())
        {
                $("#confirm").next().text("Confirm password and Password do not match.");
        }
        else
        {
            $("#confirm").next().text("*");
        }
        });
    

/**************Code to check the password criterion *********************/
     let passCheck=true;
$("#password").keyup(function(value)
  {
    passCheck=true;

/**********Get the value of alert labels**************/
    let password = $(this).val();
    let digit=$("#digit");
    let upper=$("#upper");
    let lower=$("#lower");
    let special=$("#special");
    let length=$("#length");

/**********Set the variables for regular expression to check valu of password field**********/
    let lowerCase=new RegExp('(?=.*[a-z])');
    let uppercase=new RegExp('(?=.*[A-Z])');
    let number=new RegExp('(?=.*[0-9])');
    let specialChar=new RegExp('(?=.*[!@#\$%\^&\*])');
    let lengthChar=new RegExp('(?=.{8,})');

/********Code to check that the passord valud contains lowecase letters**********/    
    if(lowerCase.test(password))
    {       
        $(lower).css("color","green");      
        
    }
    else
    {
        $(lower).css("color","red"); 
        passCheck=false;
       
    }

/********Code to check that the passord valud contains uppercase letters**********/   
     if(uppercase.test(password))
    {       
        $(upper).css("color","green");
        
    }
    else
    {
        $(upper).css("color","red");
        passCheck=false;
        
    }

/********Code to check that the passord valud contains Digits**********/      
     if(number.test(password))
    {       
        $(digit).css("color","green");       
        
    }
    else
    {
        $(digit).css("color","red"); 
        passCheck=false;       
    }

 /********Code to check that the passord length is atleast 8 charaters**********/     
     if(specialChar.test(password))
    {       
        $(special).css("color","green");
       
    }
    else
    {
        $(special).css("color","red");
        passCheck=false;
       
    }

 /********Code to check that the passord valud ontains uppercase letters**********/     
     if(lengthChar.test(password))
    {       
        $(length).css("color","green");
        
    }
    else
    {
        $(length).css("color","red");
        passCheck=false; 
       
    }  
   
  });
 /*******Code to change event the radio buttons in order to change the label of student and teacher**************/
    $(":radio").change( () => 
    {

        const radio = $(":radio:checked").val();
        console.log(radio);
        if (radio == "teacher") 
        {
            $("#stdId").text("Teacher ID");
            $("#label_dept").text("Department Name");
                    
            
        } 
        else 
        {
            $("#label_dept").text("Cousrse Name");
            $("#stdId").text("Student ID");
        }
    });

/* Code to handle the submission of the Submit button*************/
    $("#membershipForm").submit( eve => 
        {
        
       let isValid = true;
/* Code to validate the Email ID with regular expression*******************/
        const e_mail_pattern = /\b[A-Za-z0-9]+@[A-Za-z0-9]+\.[A-Za-z]{2,4}\b/;
        const e_mail = $("#e_mail").val();
        if (e_mail == "") 
            { 
                $("#e_mail").next().text("E_Mail is Required.");
                isValid = false;
             } 
        else if ( !e_mail_pattern.test(e_mail) ) 
            {
                $("#e_mail").next().text("Not a valid email format.");
                isValid = false;
            } 
        else 
            {
                $("#e_mail").next().text("");
            }
        $("#e_mail").val(e_mail);
            
/* Code to validate the Password*******************/
        const password = $("#password").val();
        if ( password.length < 8) 
        {
            $("#password").next().text("Must be 8 or more characters.");
            isValid = false;
        } 
        else 
        {
            $("#password").next().text("");
        }
        $("#password").val(password);
        
/* Code to validate the Confirm Password*******************/
          const confirm = $("#confirm").val();
        if (confirm == "") 
        {
                $("#confirm").next().text("Confirm password is required.");
                isValid = false;
        } 
        else if(confirm != password)
        {
                $("#confirm").next().text("Confirm password and Password do not match.");
        }
        else 
        {
                $("#confirm").next().text("");
        }
                $("#confirm").val(confirm);                    
        
  
        
/* Code to validate the Department/Course  Field*******************/
       
                const dept_name = $("#dept_name").val();
        if (dept_name == "") 
        {
                $("#dept_name").next().text("This field is required.");
                isValid = false;
        } 
        else 
        {
                $("#dept_name").next().text("");
        }
                $("#dept_name").val(dept_name);                    
        
    
/* Code to validate the Student/Teacher ID*******************/
         const std_id = $("#std_id").val();
        if (std_id == "") 
        {
            $("#std_id").next().text("ID is required.");
            isValid = false;
        } 
        else 
        {
            $("#std_id").next().text("");
        }
        $("#std_id").val(std_id);              
                          
/* Code to validate the First Name******************/
      let digit=new RegExp('(?=.*[0-9])');
        const firstName = $("#firstName").val();
       
        if (firstName == "") 
        {
            $("#firstName").next().text("First Name is required.");
            isValid = false;
        } 
        else if (digit.test(firstName))
        {
            $("#firstName").next().text("Digits are not allowded.");
              isValid = false;
        }
        else 
        {
            $("#firstName").next().text("");
        }
        $("#firstName").val(firstName);
                    
/* Code to validate the Last Name******************/
        const lastName = $("#lastName").val();

        if (lastName == "") 
        {
            $("#lastName").next().text("Last Name is required.");
            isValid = false;
        } 
          else if (digit.test(lastName))
        {
            $("#lastName").next().text("Digits are not allowded.");
            isValid = false;
        }
        else 
        {
            $("#lastName").next().text("");
        }
        $("#lastName").val(lastName);
            
/* Code to validate the Mobile Name******************/
        const mobilePattern = /^\d{3}-\d{3}-\d{4}$/;
        const mobile = $("#mobile").val();
        if (mobile == "") 
        { 
            $("#mobile").next().text("Mobile Number is required.");
            isValid = false; 
        } 
        else if ( !mobilePattern.test(mobile) ) 
        {
            $("#mobile").next().text("Use 999-999-9999 format.");
            isValid = false;
        } 
        else 
        {
            $("#mobile").next().text("");
        }
        $("#mobile").val(mobile);
                    
        
/* Code to validate the Address Field******************/
     
       const address = $("#address").val();
        if (address == "") 
        {
            $("#address").next().text("Address is required.");
            isValid = false;
        } 
        else 
        {
            $("#address").next().text("");
        }
        $("#address").val(address);  

/*Code to prevent submit is isvalid is false********************/
        if (!isValid) 
        {
            event.preventDefault();                
        }  
/*Code to prevent submit if password is in wrong format********************/        
        if (!passCheck) 
        {
            event.preventDefault();   
             $("#password").next().text("Password Must meet all criterion.");             
        } 
    });

/*Code to reset the astricks when click the reset button***********/
  $("#reset").click( eve =>
    {
        location.reload();
      
    });

});


   