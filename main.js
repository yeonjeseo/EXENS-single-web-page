"use strict";
/*================== Email ==================*/
(function () {
  emailjs.init("user_lIEcZi4awRHqgiziPAV3Z");
})();

const btnSend = document.getElementById("btnSubmit");
btnSend.addEventListener("click", (e) => {
  e.preventDefault();
  let templateParams = {
    fullName: document.getElementById("fullName").value,
    phoneNumber: document.getElementById("phoneNumber").value,
    replyTo: document.getElementById("emailAddress").value,
    message: document.getElementById("messageBox").value,
  };
  console.log(templateParams);
  sendEmail(templateParams);
});

function sendEmail(templateParams) {
  emailjs.send("service_tui1gcl", "template_p1fingl", templateParams).then(
    function (response) {
      alert("메일을 성공적으로 보냈습니다.");
      console.log("SUCCESS!", response.status, response.text);
      location.reload();
    },
    function (error) {
      alert("시스템 점검 중입니다.");
      console.log("FAILED...", error);
    }
  );
}
