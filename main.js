"use strict";
/*================== Email ==================*/
(function () {
  emailjs.init("user_lIEcZi4awRHqgiziPAV3Z");
})();

const emailAddr = document.getElementById("emailAddress");
const btnSend = document.getElementById("btnSubmit");
btnSend.addEventListener("click", (e) => {
  e.preventDefault();
  const templateParams = {
    fullName: document.getElementById("fullName").value,
    phoneNumber: document.getElementById("phoneNumber").value,
    replyTo: document.getElementById("emailAddress").value,
    message: document.getElementById("messageBox").value,
  };

  const isValid = validateEmail(templateParams);
  return isValid
    ? sendEmail(templateParams)
    : alert("작성 양식을 확인해 주세요");
});
// 성함, 연락처, 이메일 주소, 메세지가 비어있거나,
// 주소 형식이 맞지 않으면 alert();
// 양식 맞으면 sendEmail 함수
const validateEmail = (templateParams) => {
  const regExpEmail =
    /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
  const regExpNumber = /^\d{3}-\d{3,4}-\d{4}$/;

  for (let key in templateParams) {
    if (
      !templateParams[key] ||
      !regExpEmail.test(templateParams.replyTo) ||
      !regExpNumber.test(templateParams.phoneNumber)
    ) {
      return false;
    }
  }
  return true;
};

const sendEmail = (templateParams) => {
  emailjs.send("service_tui1gcl", "template_p1fingl", templateParams).then(
    (response) => {
      alert("메일을 성공적으로 보냈습니다.");
      console.log("SUCCESS!", response.status, response.text);
      location.reload();
    },
    (error) => {
      alert("시스템 점검 중입니다.");
      console.log("FAILED...", error);
    }
  );
};
