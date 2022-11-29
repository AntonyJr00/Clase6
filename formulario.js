const usuario = document.getElementById("usuario");
const email = document.getElementById("email");
const password = document.getElementById("password");
const telefono = document.getElementById("telefono");
const button = document.getElementById("button");
const form = document.getElementById("form");

let parrafo = document.createElement("p");
form.append(parrafo);

const labeluser = document.getElementById("labeluser");
const passContainer = document.querySelector(".form-floating3");

usuario.addEventListener("input", () => {
  let dataUser = usuario.value;
  let expRegUser = /[A-Za-z\d$@$!%*?&]{4,15}/;
  let userOk = expRegUser.test(dataUser);

  console.log(dataUser);
  if (userOk) {
    usuario.style.background = "#0616";
  } else {
    usuario.style.background = "#f116";
  }
});

email.addEventListener("input", () => {
  let dataEmail = email.value;
  let expRegEmail =
    /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;

  let emailOk = expRegEmail.test(dataEmail);
  console.log(emailOk);
  if (emailOk) {
    email.style.background = "#0616";
  } else if (dataEmail == "") {
    email.style.background = "none";
  } else {
    email.style.background = "#f116";
  }
});

password.addEventListener("input", () => {
  let dataPass = password.value;
  let expRegPass = /[A-Za-z\d$@$!%*?&]{8,15}/;
  let passOk = expRegPass.test(dataPass);

  console.log(passOk);
  if (passOk) {
    password.style.background = "#0616";
  } else {
    password.style.background = "#f116";
  }
});

telefono.addEventListener("input", (e) => {
  let dataTel = telefono.value;
  let expRegTel = /^9[0-9]{8}$/gm;
  let telOk = expRegTel.test(dataTel);

  console.log(telOk);
  if (telOk) {
    telefono.style.background = "#0616";
  } else {
    telefono.style.background = "red";
  }
});

button.addEventListener("click", (e) => {
  e.preventDefault();
  if (usuario) {
    parrafo.textContent = "todo ok";
  } else {
    parrafo.textContent = "no ok";
  }
});
