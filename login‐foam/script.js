'use strict';

const email = document.getElementById("email")
const password = document.getElementById("password")
const button = document.getElementById("button")

// ローカル保存
button.addEventListener("click", () => {
    localStorage.setItem("email", JSON.stringify(email.value));
    localStorage.setItem("password", JSON.stringify(password.value));
})

// 自動入力
email.value = JSON.parse(localStorage.getItem("email"));
password.value = JSON.parse(localStorage.getItem("password"));