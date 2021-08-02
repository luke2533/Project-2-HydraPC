function sendMail(customForm) {
  emailjs.send("service_nfk6llc", "Custom_PC", {
    "name" : customForm.name.value,
    "email" : customForm.email.value,
    // "customPc" : customForm.customPc.value
    // Need to get custom PC object
  })
  .then(
    function(response) {
      console.log("success", response);
    },
    function(error) {
      console.log("failed", error)
    });
    return false;
  }
