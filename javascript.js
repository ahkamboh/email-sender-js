 var input = document.getElementById('Password');
    input.oninvalid = function (event) {
      event.target.setCustomValidity('Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters');
    }
    function sendEmail() {
      let FirstName = document.getElementById("First-Name").value;
      let lastName = document.getElementById("Last-Name").value;
      let email = document.getElementById("email").value;
      let dob = document.getElementById("dob").value;
      let password = document.getElementById("password").value;

       Email.send({
        Host: "smtp.elasticemail.com",
        Username: "kambohdiv@gmail.com",
        Password: "4403B55893D3259568D1C4B9BDBFBEC236BC",
        To: email,
        From: 'kambohdiv@gmail.com',
        Subject: "Thanks " + FirstName+ "-"+lastName,
        Body: "Hi,"+FirstName + "&nbsp;"+lastName +" Thanks for joining ahkamboh 😊"+"<br>"+" Your Date of Birth is : "+dob+"<br>"+"Your Password is:"+password
      }).then(
         alert("Thanks "+FirstName+" For joining Kamboh div 😊. Check email box for details that your submit now"));
    }