
/********************************************************************/
/* Sibin George                                                    */
/********************************************************************/


$(document).ready(function () {
  function validateForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;

    // basic email validation
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      return false;
    }

    // open the jQuery UI Dialog
    $("#confirmationDialog").dialog({
      modal: true,
      buttons: {
        "Send Email": function () {
          // api call for email sending
          alert("Email sent successfully!");

          // reset the form
          $("#contactForm")[0].reset();

          // close the dialog
          $(this).dialog("close");
        },
        Cancel: function () {
          // close the dialog without sending the email
          $(this).dialog("close");
        },
      },
    });

    // prevent the form from submitting immediately
    return false;
  }

  // attach the validateForm function to the form's onsubmit event
  document.getElementById("contactForm").onsubmit = validateForm;
});
