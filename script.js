const form = document.getElementById("cadastroForm");
const nome = document.getElementById("nome");
const email = document.getElementById("email");
const idade = document.getElementById("idade");
const senha = document.getElementById("senha");
const confirmarSenha = document.getElementById("confirmarSenha");
const termos = document.getElementById("termos");
const mensagem = document.getElementById("mensagem");

const mostrarSenha = document.getElementById("mostrarSenha");
const strengthBar = document.getElementById("strengthBar");
const senhaInfo = document.getElementById("senhaInfo");

mostrarSenha.addEventListener("click", function () {
  if (senha.type === "password") {
    senha.type = "text";
    confirmarSenha.type = "text";
    mostrarSenha.textContent = "X";
  } else {
    senha.type = "password";
    confirmarSenha.type = "password";
    mostrarSenha.textContent = "👁";
  }
});

senha.addEventListener("input", function () {
  const tamanho = senha.value.length;

  if (tamanho === 0) {
    strengthBar.style.width = "0";
    senhaInfo.textContent = "Digite uma senha";
  } else if (tamanho < 6) {
    strengthBar.style.width = "33%";
    senhaInfo.textContent = "Senha fraca";
  } else if (tamanho < 10) {
    strengthBar.style.width = "66%";
    senhaInfo.textContent = "Senha média";
  } else {
    strengthBar.style.width = "100%";
    senhaInfo.textContent = "Senha forte";
  }
});

form.addEventListener("submit", function (event) {
  event.preventDefault();

  limparErros();

  let formularioValido = true;

  if (nome.value.trim() === "") {
    document.getElementById("nomeErro").textContent = "Digite seu nome.";
    formularioValido = false;
  }

  if (email.value.trim() === "") {
    document.getElementById("emailErro").textContent = "Digite seu e-mail.";
    formularioValido = false;
  }

  if (idade.value === "") {
    document.getElementById("idadeErro").textContent = "Digite sua idade.";
    formularioValido = false;
  }

  if (senha.value.length < 6) {
    document.getElementById("senhaErro").textContent =
      "A senha deve ter pelo menos 6 caracteres.";
    formularioValido = false;
  }

  if (senha.value !== confirmarSenha.value) {
    document.getElementById("senhaErro").textContent =
      "As senhas não coincidem.";
    formularioValido = false;
  }

  if (!termos.checked) {
    mensagem.textContent = "Você precisa aceitar os termos de uso.";
    mensagem.className = "message error-message";
    formularioValido = false;
  }

  if (!formularioValido) {
    return;
  }

  mensagem.textContent = "Cadastro realizado com sucesso!";
  mensagem.className = "message success-message";

  mostrarResumo();
});

function limparErros() {
  document.getElementById("nomeErro").textContent = "";
  document.getElementById("emailErro").textContent = "";
  document.getElementById("idadeErro").textContent = "";
  document.getElementById("senhaErro").textContent = "";
  mensagem.textContent = "";
  mensagem.className = "message";
}

function mostrarResumo() {
  const estado = document.getElementById("estado").value;

  document.getElementById("resumo").textContent =
    `Olá, ${nome.value}! Seu cadastro foi preenchido com sucesso. ` +
    `Estado: ${estado || "não informado"}.`;

  document.getElementById("resultado").classList.remove("hidden");
}
