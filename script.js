document.addEventListener("DOMContentLoaded", function () {
  const headerElement = document.querySelector("header");
  if (headerElement) {
    headerElement.className = "container-fluid d-flex align-items-center py-0";
    headerElement.innerHTML = `
      <div class="d-flex align-items-center">
        <a href="index.html"><img id="img_navbar" src="img/logo1-.png" alt="Logo da loja" /></a>
        <div class="ms-1" id="gamecore-brand">
          <span class="d-block" id="gamecore-top">Game</span>
          <span class="d-block" id="gamecore-bottom">Core</span>
        </div>
      </div>
      <div class="container-md d-flex align-items-center justify-content-center">
        <nav class="navbar navbar-expand-md">
          <ul class="navbar-nav">
            <li class="nav-item px-1 px-lg-2">
              <a id="login" class="nav-link fs-6 text-white" href="login.html">Login</a>
            </li>
            <li class="nav-item px-1 px-lg-2">
              <a class="nav-link fs-6 text-white" href="carrinho.html">Carrinho</a>
            </li>
            <li class="nav-item px-1 px-lg-2">
              <a class="nav-link fs-6 text-white" href="categorias.html">Categorias</a>
            </li>
            <li class="nav-item px-1 px-lg-2">
              <a class="nav-link fs-6 text-white" href="contato.html">Contato</a>
            </li>
          </ul>
        </nav>
      </div>
    `;
  }

  const footerElement = document.querySelector("footer");
  if (footerElement) {
    footerElement.className = "container-fluid py-4";
    footerElement.innerHTML = `
      <div class="container d-flex flex-wrap justify-content-center align-items-start">
        <div class="col-6 col-md p-0 mx-0 d-flex flex-column align-items-center mb-3">
          <p class="fs-5 fw-bold mb-2">Conta</p>
          <p class="mb-1">Meus pedidos</p>
          <p class="mb-1">Cadastrar</p>
        </div>
        <div class="col-6 col-md p-0 mx-0 d-flex flex-column align-items-center mb-3">
          <p class="fs-5 fw-bold mb-2">Departamentos</p>
          <p class="mb-1">Periféricos</p>
          <p class="mb-1">Computadores</p>
          <p class="mb-1">Notebooks</p>
          <p class="mb-1">Hardware</p>
          <p class="mb-1">Consoles</p>
          <p class="mb-1">Monitores</p>
        </div>
        <div class="col-6 col-md p-0 mx-0 d-flex flex-column align-items-center mb-3">
          <p class="fs-5 fw-bold mb-2">Redes Sociais</p>
          <p class="mb-1">Instagram</p>
          <p class="mb-1">Facebook</p>
        </div>
        <div class="col-6 col-md p-0 mx-0 d-flex flex-column align-items-center mb-3 d-none d-lg-flex">
          <p class="fs-5 fw-bold mb-2">SAC</p>
          <p class="mb-1">(XX) XXXXX-XXXX</p>
        </div>
        <div class="col-6 col-md p-0 mx-0 d-flex flex-column align-items-center mb-3 d-none d-lg-flex">
          <p class="fs-5 fw-bold mb-2">Fale Conosco</p>
          <p class="mb-1">seuemail@mail.com.br</p>
        </div>
      </div>
      <div class="text-center mt-3 pt-3 border-top border-secondary">
        <p class="mb-0">&copy; 2026 GameCore. Todos os direitos reservados.</p>
      </div>
    `;
  }

  var catSlides = document.querySelectorAll(".cat-slide-img");
  if (catSlides.length) {
    var catIndex = 0;
    var dots = document.querySelectorAll(".slide-dot");

    function showSlide(index) {
      catSlides.forEach(function (img) { img.classList.remove("active"); });
      dots.forEach(function (dot) { dot.classList.remove("active"); });
      catIndex = index;
      catSlides[catIndex].classList.add("active");
      if (dots[catIndex]) dots[catIndex].classList.add("active");
    }

    showSlide(0);

    var slideInterval = setInterval(autoSlide, 6000);

    function autoSlide() {
      showSlide((catIndex + 1) % catSlides.length);
    }

    function resetInterval() {
      clearInterval(slideInterval);
      slideInterval = setInterval(autoSlide, 6000);
    }

    var nextBtn = document.getElementById("slide-next");
    var prevBtn = document.getElementById("slide-prev");

    if (nextBtn) {
      nextBtn.addEventListener("click", function () {
        showSlide((catIndex + 1) % catSlides.length);
        resetInterval();
      });
    }

    if (prevBtn) {
      prevBtn.addEventListener("click", function () {
        showSlide((catIndex - 1 + catSlides.length) % catSlides.length);
        resetInterval();
      });
    }

    dots.forEach(function (dot) {
      dot.addEventListener("click", function () {
        showSlide(parseInt(this.getAttribute("data-index")));
        resetInterval();
      });
    });
  }

  const botaoForm = document.querySelector("#botao-form");
  if (botaoForm) {
    botaoForm.addEventListener("click", function (e) {
      e.preventDefault();
      var inputUser = document.querySelector("#nome");
      if (inputUser && inputUser.value.length < 3) {
        alert("Por favor, digite seu nome completo.");
      } else {
        validaEmail();
      }
    });
  }

  var userInput = document.querySelector("#user");
  if (userInput) {
    userInput.closest("form").addEventListener("submit", function (e) {
      e.preventDefault();
      pegaDadosLogin();
    });
  }
});

function validaEmail() {
  var email = document.querySelector("#email");
  if (!email) return;
  if (email.value.indexOf("@") === -1 || email.value.indexOf(".") === -1) {
    alert("Por favor, informe um e-mail válido!");
  } else {
    alert("E-mail cadastrado com sucesso!");
  }
}

function pegaDadosLogin() {
  var inputUser = document.querySelector("#user");
  var inputSenha = document.querySelector("#senha");
  if (inputUser.value.length < 5 || inputSenha.value.length < 5) {
    alert("Usuário e senha devem ter pelo menos 5 caracteres.");
  } else {
    alert("Login realizado com sucesso!");
  }
}
