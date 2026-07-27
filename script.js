// Funcionalidade pagina index

function mostraValor() {
  alert(
    "Seus dados foram cadastrados no nome de " +
      inputNome.value +
      ". Você receberá mensagens no enderaço de email: " +
      inputEmail.value
  );
}

function erro() {
  alert("Você precisa preencher todos os campos");
}

function pegaDados() {
  inputNome = document.querySelector("#nome");
  inputEmail = document.querySelector("#email");

  if (inputNome.value.length == 0 || inputEmail.value.length == 0) {
    erro();
    
  } else {
    mostraValor();
  }
}

//Função SlideShow
  function intervalo(){
    setInterval(slideShow, 6000);
    
  }
  
let contagem = 1;

function slideShow() {
  
  
  contagem ++;

  if (contagem == 1) {
    $("#slide1").show();
    $("#slide2").hide();
    $("#slide3").hide();
  } else if(contagem == 2){
    $("#slide1").hide();
    $("#slide2").show();
    $("#slide3").hide();
  } else if(contagem == 3){
    $("#slide1").hide();
    $("#slide2").hide();
    $("#slide3").show();
    contagem = 1;
  }

  
}

// Funcionalidade pagina Login

function pegaDadosLogin() {
  inputUser = document.querySelector("#user");
  inputSenha = document.querySelector("#senha");

  if (inputUser.value.length < 5 || inputSenha.value.length < 5) {
    erroLogin();
  } else {
    logar();
  }
}

function logar() {
  alert("Você foi logado com sucesso e pode retornar para a pagina principal");
}
function erroLogin() {
  alert("Você precisa preencher todos os campos");
}
