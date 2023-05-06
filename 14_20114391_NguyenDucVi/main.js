const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const makhachhang = $('#txtMa');
const tenkhachhang = $('#txtTen');
const diachi = $('#txtDC');
const tiendichvu = $('#txtDV');
const tiendodung = $('#txtDD');
const tiengiam = $('#txtGiam');

const submit = $('#btnSave');

const checkma = () => {
    const regex = /^[0-9]{1,}$/;
    const parent = makhachhang.parentElement;
    if (regex.test(makhachhang.value.trim()) == false) {
        parent.querySelector('.error').innerText = 'Mã khách hàng không hợp lệ';
        makhachhang.classList.add('error');
        return false;
    }
}