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
    },
    function(error) {
      console.log("failed", error);
    });
    return false;
  }
