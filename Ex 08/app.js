import user from "./user.js";

console.log("m1-s05-e08");

const cEmail = document.getElementById("campo-email");
const cpassword = document.getElementById("campo-senha");
const bAcessar = document.getElementById("botao-acessar");
const pMensagem = document.getElementById("p-mensagem");

const users = [
  new Usuario("Gizelle", "gizelle@hotmail.com", "030223"),
  new Usuario("Emanuela", "emanuela@hotmail.com", "654"),
];

bAcessar.addEventListener("click", () => {
  const email = cEmail.value;
  const password = cpassword.value;

  let userfound = null;

  if (email && password) {
    userfound = users.find(user => {
      return user.autenticar(email, password)
    });
  }

  if (userfound) {
    pMensagem.innerHTML = `Hello, ${userfound.nome}!`;
    cEmail.value = "";
    cpassword.value = "";
  } else {
    pMensagem.innerHTML = "Invalid credentials!";
  }
})
