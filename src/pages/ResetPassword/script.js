let currentPasswordInput = document.getElementById("current_password");
let newPasswordInput = document.getElementById("new_password");
let confirmPassInput = document.getElementById("confirm_password");
let submitButton = document.querySelector(".submit_button");
let toggle1 = document.getElementById("toggle-password1");
let toggle2 = document.getElementById("toggle-password2");
let toggle3 = document.getElementById("toggle-password3");

function togglePasswordVisibility(inputField, toggleButton) {
  let currentType = inputField.getAttribute("type");
  if (currentType === "password") {
    inputField.setAttribute("type", "text");
  } else {
    inputField.setAttribute("type", "password");
  }
}
toggle1.addEventListener("click", () => {
  togglePasswordVisibility(currentPasswordInput, toggle1);
});
toggle2.addEventListener("click", () => {
  togglePasswordVisibility(newPasswordInput, toggle2);
});
toggle3.addEventListener("click", () => {
  togglePasswordVisibility(confirmPassInput, toggle3);
});
   
submitButton.addEventListener("click", (e) => {
  e.preventDefault();

  const newPasswordError = document.getElementById("password_error");
  const textPassError = document.querySelector(".text_password_error");
  const confirmPassError = document.querySelector(".confirm_password_error");

  const newPasswordValue = newPasswordInput.value.trim();

  const passwordLength = (newPasswordValue.length >= 8 && newPasswordValue.length <= 15 && newPasswordValue.length !== 0);
  
  const passwordText = passwordLength && newPasswordValue.length !== 0 && (/\d/.test(newPasswordValue) && /[a-zA-Z]/.test(newPasswordValue));

  newPasswordError.textContent = "";
  textPassError.textContent = "";
  confirmPassError.textContent = "";

  if (newPasswordInput.value === "" || confirmPassInput.value === "" || currentPasswordInput.value === "") {
    newPasswordError.textContent = "Заполните все поля";

    if (newPasswordInput.value === "") {
      newPasswordInput.classList.add("input-error");
    }
    if (confirmPassInput.value === "") {
      confirmPassInput.classList.add("input-error");
    }
    if (currentPasswordInput.value === "") {
      currentPasswordInput.classList.add("input-error");
    }

    setTimeout(() => {
      currentPasswordInput.classList.remove("input-error");
      newPasswordInput.classList.remove("input-error");
      confirmPassInput.classList.remove("input-error");
    }, 4000);
  } else if (!passwordLength || !passwordText) {
    newPasswordError.textContent = "Длина пароля не может быть меньше 8 и более 15 символов";
    textPassError.textContent = "Пароль должен содержать как буквы, так и цифры. Будьте внимательны при вводе";
  } else if (newPasswordInput.value !== confirmPassInput.value) {
    confirmPassError.textContent = "Пароли не совпадают.";
  } else {
    confirmPassError.textContent = "Пароль успешно изменен.";
    confirmPassError.style.color = "green";

    setTimeout(() => {
      newPasswordInput.value = "";
      currentPasswordInput.value = "";
      confirmPassInput.value = "";
    }, 1000);

    setTimeout(() => {
      confirmPassError.textContent = "";
    }, 5000);
  }
});