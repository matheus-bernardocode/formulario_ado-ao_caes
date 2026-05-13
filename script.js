const form = document.getElementById("form");
const mensagemErro = document.getElementById("mensagemErro");
const resultado = document.getElementById("resultado");

const cpfsCadastrados = [
  "23647593001",
  "98735428381",
  "22803947212"
];

form.addEventListener("submit", function(event) {

  event.preventDefault();

  mensagemErro.innerHTML = "";
  resultado.innerHTML = "";

  //CAMPOS_PREENCHER

  const nome = document.getElementById("nome").value.trim();
  const email = document.getElementById("email").value.trim();
  const telefone = document.getElementById("telefone").value.trim();
  const cpf = document.getElementById("cpf").value.trim();
  const idade = Number(document.getElementById("idade").value);
  const cidade = document.getElementById("cidade").value.trim();

  const moradia = document.getElementById("moradia").value;
  const quintal = document.getElementById("quintal").value;
  const pet = document.getElementById("pet").value;

  const horas = Number(document.getElementById("horas").value);

  const motivo = document.getElementById("motivo").value.trim().toLowerCase();

  const permiteAnimais = document.getElementById("permiteAnimais").value;

  const quintalSeguro = document.getElementById("quintalSeguro").value;

  const justificativa = document.getElementById("justificativa").value.trim();

  const financeiro = document.getElementById("financeiro").value;

  const decisao = document.getElementById("decisao").value;

  const termo = document.getElementById("termo").checked;

  //VALIDAÇÕES

  if (nome.length < 3) {
    mensagemErro.innerHTML = "O nome deve ter no mínimo 3 caracteres.";
    return;
  }

  if (!email.includes("@")) {
    mensagemErro.innerHTML = "Digite um email válido.";
    return;
  }

  const telefoneNumeros = telefone.replace(/\D/g, "");

  if (telefoneNumeros.length < 8) {
    mensagemErro.innerHTML = "Telefone inválido.";
    return;
  }

  if (cpf === "") {
    mensagemErro.innerHTML = "CPF obrigatório.";
    return;
  }

  if (cpfsCadastrados.includes(cpf)) {
    mensagemErro.innerHTML = "CPF já cadastrado.";
    return;
  }

  if (idade < 18) {
    mensagemErro.innerHTML = "Você deve ter 18 anos ou mais.";
    return;
  }

  if (cidade === "") {
    mensagemErro.innerHTML = "Cidade obrigatória.";
    return;
  }

  if (moradia === "") {
    mensagemErro.innerHTML = "Selecione o tipo de moradia.";
    return;
  }

  if (quintal === "") {
    mensagemErro.innerHTML = "Informe se possui quintal.";
    return;
  }

  if (pet === "") {
    mensagemErro.innerHTML = "Informe se já teve pet.";
    return;
  }

  if (isNaN(horas) || horas < 0) {
    mensagemErro.innerHTML = "Informe horas válidas.";
    return;
  }

  if (motivo.length < 10) {
    mensagemErro.innerHTML = "O motivo deve ter no mínimo 10 caracteres.";
    return;
  }

  if (!termo) {
    mensagemErro.innerHTML = "Você deve aceitar o termo.";
    return;
  }

  //apartamento não pode ter quintal

  if (moradia === "apartamento" && quintal === "sim") {
    mensagemErro.innerHTML = "Quem mora em apartamento não pode possuir quintal.";
    return;
  }

  //apartamento precisa permitir animais

  if (moradia === "apartamento" && permiteAnimais === "") {
    mensagemErro.innerHTML = "Informe se o apartamento permite animais.";
    return;
  }

  if (moradia === "apartamento" && permiteAnimais === "nao") {
    mensagemErro.innerHTML = "O local precisa permitir animais.";
    return;
  }

  //casa precisa de um quintal seguro

  if (moradia === "casa" && quintalSeguro === "") {
    mensagemErro.innerHTML = "Informe se o quintal é seguro.";
    return;
  }

  if (moradia === "casa" && quintalSeguro === "nao") {
    mensagemErro.innerHTML = "O quintal precisa ser seguro.";
    return;
  }

  //mais de 8 horas sozinho

  if (horas > 8 && justificativa.length < 5) {
    mensagemErro.innerHTML =
      "Explique por que o animal ficará mais de 8 horas sozinho.";
    return;
  }

  //motivo genérico/qualquer

  const motivosGenericos = [
    "quero",
    "porque sim",
    "sim",
    "gosto"
  ];

  if (motivosGenericos.includes(motivo)) {
    mensagemErro.innerHTML = "O motivo da adoção é muito genérico.";
    return;
  }

  //condições financeiras

  if (financeiro === "nao") {
    mensagemErro.innerHTML =
      "A adoção foi bloqueada por falta de condições financeiras.";
    return;
  }

  //decisão impulsiva

  if (decisao === "sim") {
    alert("Cuidado com decisões impulsivas.");
  }

  //nunca teve pet

  if (pet === "nao") {
    alert("A ONG poderá acompanhar o processo de adaptação.");
  }


  resultado.innerHTML = `
    <h3>Cadastro enviado com sucesso!</h3>

    <p><strong>Nome:</strong> ${nome}</p>

    <p><strong>Email:</strong> ${email}</p>

    <p><strong>Telefone:</strong> ${telefone}</p>

    <p><strong>CPF:</strong> ${cpf}</p>

    <p><strong>Idade:</strong> ${idade}</p>

    <p><strong>Cidade:</strong> ${cidade}</p>

    <p><strong>Moradia:</strong> ${moradia}</p>

    <p><strong>Possui quintal:</strong> ${quintal}</p>

    <p><strong>Já teve pet:</strong> ${pet}</p>

    <p><strong>Horas sozinho:</strong> ${horas}</p>

    <p><strong>Motivo:</strong> ${motivo}</p>
  `;

});