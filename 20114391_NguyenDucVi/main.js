const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const firstname = $('#firstname');
const lastname = $('#lastname');
const username = $('#username');
const password = $('#password');
const confirmPassword = $('#confirmPassword');

const submit = $('#submit');

const checkFirstname = () => {
    const regex = /^[a-zA-Z]\W*/;
    const parent = firstname.parentNode.parentNode;

    if (regex.test(firstname.value.trim()) === false) {
        parent.querySelector('.error').innerHTML = 'Please enter a valid name';
        return false;
    }
    return true;
};
firstname.onblur = checkFirstname;

const checkLastname = () => {
    const regex = /^[a-zA-Z]\W*/;
    const parent = lastname.parentNode.parentNode;

    if (regex.test(lastname.value.trim()) === false) {
        parent.querySelector('.error').innerHTML = 'Please enter a valid last name';
        return false;
    }
    return true;
};
lastname.onblur = checkLastname;

const checkUsername = () => {
    const regex = /^[a-zA-Z]\W*/;
    const parent = username.parentNode.parentNode;

    if (regex.test(username.value.trim()) === false) {
        parent.querySelector('.error').innerHTML = 'Please enter a valid user name';
        return false;
    }
    return true;
};
username.onblur = checkUsername;

const checkPassword = () => {
    const regex = /^[a-zA-Z]\W*/;
    const parent = password.parentNode.parentNode;

    if (regex.test(password.value.trim()) === false) {
        parent.querySelector('.error').innerHTML = 'Please enter a valid password';
        return false;
    }
    return true;
};
password.onblur = checkPassword;