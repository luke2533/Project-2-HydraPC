function sendMail(customForm) {
  emailjs.send("service_nfk6llc","Custom_PC", {
    "name" : customForm.name.value,
    "email" : customForm.email.value,
    "case" : customForm.case.value,
    "cpu" : customForm.cpu.value,
    "gpu" : customForm.gpu.value,
    "motherboard" : customForm.motherboard.value,
    "ram" : customForm.ram.value,
    "pcu" : customForm.pcu.value,
    "ssd" : customForm.ssd.value,
    "m2" : customForm.m2.value,
    "hdd" : customForm.hdd.value
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
