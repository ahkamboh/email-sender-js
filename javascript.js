 var input = document.getElementById('Password');
    input.oninvalid = function (event) {
      event.target.setCustomValidity('Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters');
    }
    function sendEmail() {
      let FirstName = document.getElementById("First-Name").value;

      // Demo only: no email is sent and nothing leaves this page.
      // The date of birth and password fields are never read, stored or sent.
      alert("Demo only - nothing is sent. Thanks " + FirstName + " for trying the form.");
    }