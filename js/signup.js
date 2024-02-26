/*******************************************************************/
/* Student Name : Hanish Kavalanchery Haridas                      */
/*                                                                 */
/*******************************************************************/  

"use strict";

// helper function for validating form controls
function validateFormControl(control) {
  // special validation for email
  if (control[0].type === "email" && control[0].validity.typeMismatch) {
    // if email not valid, show the second error span
    control.next().next().show();
  } else {
    control.next().next().hide();
  }

  // if there are no values in the field, show the first error span and return
  if (control.val() === "") {
    control.next().show();
    return false;
  }
  control.next().hide();
  return true;
}

// set up when the document is ready
$(document).ready(() => {
  // get the form fields
  const userName = $("#username");
  const email = $("#email_signup");
  const password1 = $("#password1");
  const password2 = $("#password2");

  $("#error-modal").hide();

  $("#signup").on("click", (evt) => {

    // validate form controls and show errors
    const isUserNameValid = validateFormControl(userName);
    const isEmailValid = validateFormControl(email);
    const isPassword1Valid = validateFormControl(password1);
    const isPassword2Valid = validateFormControl(password2);

    // if any of the form fields are not valid
    // prevent the default submit action and return
    if (
      !isUserNameValid ||
      !isEmailValid ||
      !isPassword1Valid ||
      !isPassword2Valid
    ) {
      evt.preventDefault();
      $("#error-modal").show().fadeOut(5000);
      return false;
    }

    // get the value enetered for both the passwords
    const password1Value = password1.val();
    const password2Value = password2.val();
    // if passwords doesn't match, show the second error span
    // and prevent the submit action
    if (password1Value !== password2Value) {
      password2.next().next().show();
      evt.preventDefault();
      return;
    }
    password2.next().next().hide();
  });
});
