const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const ma = $("#ma");
const name = $("#name");
const address = $("#address");
const gia = $("#gia");

const checkMa = () => {
    const regex = /[0-9]{9}$/;
    if (regex.test(ma.value)) {
        ma.classList.remove("invalid");
    } else {
        ma.classList.add("invalid");
    }
};

ma.onblur = checkMa;

const checkName = () => {
    const regex = /[A-Z{I}]([a-z])/;
    if (regex.test(name.value)) {
        name.classList.remove("invalid");
    } else {
        name.classList.add("invalid");
    }
};

name.onblur = checkName;

const checkAddress = () => {
    const regex = /[A-Z{I}]([a-z])/;
    if (regex.test(address.value)) {
        address.classList.remove("invalid");
    } else {
        address.classList.add("invalid");
    }
};

address.onblur = checkAddress;