const name = document.querySelector(".name");
const email = document.querySelector(".email");
const pwd = document.querySelector(".pwd");
const rpwd = document.querySelector(".rpwd");
const nameField = document.querySelector("#name");
const emailField = document.querySelector("#email");
const pwdField = document.querySelector("#password");
const rpwdField = document.querySelector("#repeat-password");

const checkName = (nameField) => {
  if (nameField.value.length > 0) {
    name.classList.add("shrink1");
  }
  if (nameField.value.length == 0) {
    name.classList.toggle("shrink1");
  }
};

const checkEmail = (emailField) => {
  if (emailField.value.length > 0) {
    email.classList.add("shrink1");
  }
  if (emailField.value.length == 0) {
    email.classList.toggle("shrink1");
  }
};
const checkPwd = (pwdField) => {
  if (pwdField.value.length > 0) {
    pwd.classList.add("shrink1");
  }
  if (pwdField.value.length == 0) {
    pwd.classList.toggle("shrink1");
  }
};

const checkrPwd = (rpwdField) => {
  if (rpwdField.value.length > 0) {
    rpwd.classList.add("shrink1");
  }
  if (rpwdField.value.length == 0) {
    rpwd.classList.toggle("shrink1");
  }
};

nameField.addEventListener("focus", function () {
  checkName(this);
});
nameField.addEventListener("focusout", function () {
  checkName(this);
});

pwdField.addEventListener("focus", function () {
  checkPwd(this);
});
pwdField.addEventListener("focusout", function () {
  checkPwd(this);
});

emailField.addEventListener("focus", function () {
  checkEmail(this);
});
emailField.addEventListener("focusout", function () {
  checkEmail(this);
});

rpwdField.addEventListener("focus", function () {
  checkrPwd(this);
});
rpwdField.addEventListener("focusout", function () {
  checkrPwd(this);
});
