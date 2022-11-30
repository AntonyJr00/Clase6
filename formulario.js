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

let errores = [];

usuario.addEventListener("input", () => {
  let dataUser = usuario.value;
  let expRegUser = /[A-Za-z\d$@$!%*?&]{4,15}/;
  let userOk = expRegUser.test(dataUser);
  if (userOk) {
    usuario.style.background = "#0616";
    errores[0] = "";
  } else {
    usuario.style.background = "#f116";
    errores[0] = "Error en el usuario.  ";
  }
});

email.addEventListener("input", () => {
  let dataEmail = email.value;
  let expRegEmail =
    /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;

  let emailOk = expRegEmail.test(dataEmail);
  if (emailOk) {
    email.style.background = "#0616";
    errores[1] = "";
  } else if (dataEmail == "") {
    email.style.background = "none";
  } else {
    email.style.background = "#f116";
    errores[1] = "Error en el email.  ";
  }
});

password.addEventListener("input", () => {
  let dataPass = password.value;
  let expRegPass = /[A-Za-z\d$@$!%*?&]{8,15}/;
  let passOk = expRegPass.test(dataPass);

  if (passOk) {
    password.style.background = "#0616";
    errores[2] = "";
  } else {
    password.style.background = "#f116";
    errores[2] = "Error en el password.  ";
  }
});

telefono.addEventListener("input", (e) => {
  let dataTel = telefono.value;
  let expRegTel = /^9[0-9]{8}$/gm;
  let telOk = expRegTel.test(dataTel);

  if (telOk) {
    telefono.style.background = "#0616";
    errores[3] = "";
  } else {
    telefono.style.background = "#f116";
    errores[3] = "Error en el telefono.  ";
  }
});

button.addEventListener("click", (e) => {
  e.preventDefault();
  console.log(errores);
  if (!errores.every((e) => e == "")) {
    parrafo.textContent = errores.join("");
  } else {
    parrafo.textContent = "Todo ok";
  }
});
