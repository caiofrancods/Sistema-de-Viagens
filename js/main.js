function login(){
  var clientes = JSON.parse(localStorage.getItem('clientes'));
  var pos = clientes.length;
  var campo_cpf = document.getElementById('cpf');
  var cpf = Number(campo_cpf.value);
  var campo_senha = document.getElementById('senha');
  var senha = campo_senha.value;
  
  var controle = 0;
  for (var i = 0; i<pos ; i++){
    if(cpf == clientes[i].cpf){
      controle = 1;     
      if(senha == clientes[i].senha){
        var userlogado = JSON.parse(localStorage.getItem('userlogado'));
        userlogado.escopo = "clientes";
        userlogado.id = i;
        localStorage.setItem('userlogado', JSON.stringify(userlogado));
        window.location.href="area.html";
      }
    }
  }
  if(controle == 0){
    var funcionarios = JSON.parse(localStorage.getItem('funcionarios'));
    var tam = funcionarios.length;
    for (var i = 0; i<tam; i++){
      if(cpf == Number(funcionarios[i].cpf)){
        controle = 1;        
        if(senha == funcionarios[i].senha){
          userlogado = JSON.parse(localStorage.getItem('userlogado'));
          userlogado.escopo = "funcionarios";
          userlogado.id = i;
          localStorage.setItem('userlogado', JSON.stringify(userlogado));
          window.location.href="admin.html";
        }
      }
    }    
  }
  if(controle == 0){
    alert("Usuário não encontrado");
    campo_cpf.value = "";
    campo_senha.value = "";
  }
}

function verif_login(){
  var userlogado = JSON.parse(localStorage.getItem('userlogado'));
  if (userlogado.escopo == "Deslogado"){
    alert("Faça Login Primeiro!");
    window.location.href = "login.html";
  }
}

function sair(){
  var userlogado = JSON.parse(localStorage.getItem('userlogado'));
  userlogado.escopo = "Deslogado";
  userlogado.id = -1;
  localStorage.setItem('userlogado', JSON.stringify(userlogado));
  window.location.href="login.html";
}


function area_cliente(){
  var userlogado = JSON.parse(localStorage.getItem('userlogado'));
  if (userlogado.escopo == "Deslogado"){
    window.location.href = "login.html";
  }else{
    if(userlogado.escopo == "clientes"){
      window.location.href = "area.html";
    }else{
      if(userlogado.escopo == "funcionarios"){
        window.location.href = "admin.html";
      }
    }
  }
}

