// Função para carregar dinamicamente o cabeçalho padronizado em todas as páginas
document.addEventListener("DOMContentLoaded", function () {
  const headerElement = document.querySelector("header");
  
  if (headerElement) {
    headerElement.className = "container-fluid mh-100 d-flex align-items-center";
    headerElement.style.backgroundColor = "#0E3A74";

    headerElement.innerHTML = `
      <div>
        <a href="index.html"><img id="img_navbar" src="img/logo.png" alt="Logo da loja" /></a>
      </div>
      <p class="nav-brand h2 text-white ms-5 m-0">
        Game Mania
      </p>
      <div class="container-md d-flex align-items-center justify-content-end">
        <nav class="navbar navbar-expand-md">
          <ul class="navbar-nav">
            <li class="nav-item px-3 px-lg-5">
              <a id="login" class="nav-link fs-5 text-white" href="login.html">
                Login
              </a>
            </li>
            <li class="nav-item px-3 px-lg-5">
              <a class="nav-link fs-5 text-white" href="carrinho.html">
                Carrinho
              </a>
            </li>
            <li class="nav-item px-3 px-lg-5">
              <a class="nav-link fs-5 text-white" href="categorias.html">
                Categorias
              </a>
            </li>
            <li class="nav-item px-3 px-lg-5">
              <a class="nav-link fs-5 text-white" href="contato.html">
                Contato
              </a>
            </li>
          </ul>
        </nav>
      </div>
    `;
  }
});

// Validação simples
function validaEmail() {
  let email = document.querySelector("#email");
  if (email.value.indexOf("@") == -1 || email.value.indexOf(".") == -1) {
    alert("Por favor, informe um e-mail válido!");
  } else {
    alert("E-mail cadastrado com sucesso!");
  }
}

function pegaDados() {
  let inputUser = document.querySelector("#nome");
  if (inputUser.value.length < 3) {
    alert("Por favor, digite seu nome completo.");
  } else {
    validaEmail();
  }
}

// Função SlideShow
function intervalo() {
  setInterval(slideShow, 6000);
}

let contagem = 1;

function slideShow() {
  contagem++;

  if (contagem == 1) {
    $("#slide1").show();
    $("#slide2").hide();
    $("#slide3").hide();
  } else if (contagem == 2) {
    $("#slide1").hide();
    $("#slide2").show();
    $("#slide3").hide();
  } else if (contagem == 3) {
    $("#slide1").hide();
    $("#slide2").hide();
    $("#slide3").show();
    contagem = 1;
  }
}

// Funcionalidade pagina Login
function pegaDadosLogin() {
  let inputUser = document.querySelector("#user");
  let inputSenha = document.querySelector("#senha");

  if (inputUser.value.length < 5 || inputSenha.value.length < 5) {
    alert("Usuário e senha devem ter pelo menos 5 caracteres.");
  } else {
    alert("Login realizado com sucesso!");
  }
}
