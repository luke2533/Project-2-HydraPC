function sendMail(orderForm) {
  emailjs.send("service_nfk6llc", "Confirm_order", {
    "fname" : orderForm.fname.value,
    "lname" : orderForm.lname.value,
    "country" : orderForm.country.value,
    "address1" : orderForm.address1.value,
    "address2" : orderForm.address2.value,
    "town" : orderForm.town.value,
    "zip" : orderForm.zip.value,
    "phone" : orderForm.phone.value,
    "email" :orderForm.email.value
  })
  .then(
    function(response) {
      console.log("success", response);
      alert("Email sent");
    },
    function(error) {
      console.log("failed", error)
    });
    return false;
  }
