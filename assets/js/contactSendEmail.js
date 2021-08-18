function sendMail(contactForm) {
  emailjs.send("service_nfk6llc", "Contact_email", {
    "fname" : contactForm.fname.value,
    "lname" : contactForm.lname.value,
    "message" : contactForm.message.value,
    "email" : contactForm.email.value
  })
  .then(
    function(response) {
      console.log("success", response);
      alert("Email sent");
      // grab each elementbyid and cleatr interval
      // Remove alert with div that goes from block to none
    },
    function(error) {
      console.log("failed", error)
    });
    return false;
  }

// code institiute not yet documented

// Test note: failed to work due to inccorect service ID (gmail was wrong)
