const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const firstName = document.querySelector("#first-name");
const lastName = $("#last-name");
const userName = $("#user-name");
const password = $("#password");
const confirmPassword = $("#confirm-password");
const email = $("#email");
const policy = $("#policy");
const newLetter = $("#new-letter");

const submit = $("#submit");

const checkFirstName = () => {
    const regex = /^[a-z]\w*/;
    const parent = firstName.parentNode.parentNode;
    if (regex.test(firstName.value.trim()) === false) {
        parent.querySelector(".error").innerText = "Please enter your firstname";
        firstName.classList.add("invalid");
        return false;
    }
    parent.querySelector(".error").innerText = "";
    firstName.classList.remove("invalid");
    return true;
};
firstName.onblur = checkFirstName;

const checkLastName = () => {
    const regex = /^[a-z]\w*/;
    const parent = lastName.parentNode.parentNode;
    if (regex.test(lastName.value.trim()) === false) {
        parent.querySelector(".error").innerText = "Please enter your lastname";
        lastName.classList.add("invalid");
        return false;
    }
    parent.querySelector(".error").innerText = "";
    lastName.classList.remove("invalid");
    return true;
};
lastName.onblur = checkLastName;

const checkUserName = () => {
    const regex = /^[a-z]\w*/;
    const parent = userName.parentNode.parentNode;
    if (regex.test(userName.value.trim()) === false) {
        parent.querySelector(".error").innerText = "Please enter your userName";
        userName.classList.add("invalid");
        return false;
    }
    parent.querySelector(".error").innerText = "";
    userName.classList.remove("invalid");
    return true;
};
userName.onblur = checkUserName;

const checkPassword = () => {
    const regex = /^[a-z]\w*/;
    const parent = password.parentNode.parentNode;
    if (regex.test(password.value.trim()) === false) {
        parent.querySelector(".error").innerText = "Please enter your password";
        password.classList.add("invalid");
        return false;
    }
    parent.querySelector(".error").innerText = "";
    password.classList.remove("invalid");
    return true;
};
password.onblur = checkPassword;

const checkConfirmPassword = () => {
    const regex = /^[a-z]\w*/;
    const parent = confirmPassword.parentNode.parentNode;
    if (regex.test(confirmPassword.value.trim()) === false) {
        parent.querySelector(".error").innerText = "Please enter your confirmPassword";
        confirmPassword.classList.add("invalid");
        return false;
    }
    parent.querySelector(".error").innerText = "";
    confirmPassword.classList.remove("invalid");
    return true;
};
userName.onblur = checkConfirmPassword;

const checkEmail = () => {
    const regex = /^[a-z]\w*/;
    const parent = email.parentNode.parentNode;
    if (regex.test(email.value.trim()) === false) {
        parent.querySelector(".error").innerText = "Please enter your email";
        email.classList.add("invalid");
        return false;
    }
    parent.querySelector(".error").innerText = "";
    email.classList.remove("invalid");
    return true;
};
email.onblur = checkEmail;

submit.addEventListener("click", (e) => {
    e.preventDefault();
    if (checkFirstName || checkLastName || checkUserName || checkConfirmPassword || checkEmail) {
        return alert("Bạn phải nhập đầy đủ thông tin");
    }
    return alert("Đăng ký thành công");
});