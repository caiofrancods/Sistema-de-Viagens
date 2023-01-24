function cadas_funcionario() {
    var nome = document.getElementById('nome').value;
    var cpf = document.getElementById('cpf').value;
    var email = document.getElementById('email').value;
    var senha = document.getElementById('senha').value;
    var cargo = document.getElementById('cargo').value;
    var cadas_func = document.getElementById('cadas_func').value;
    var cadas_pass = document.getElementById('cadas_pass').value;
    var checkin = document.getElementById('checkin').value;
    var passagens = document.getElementById('passagens').value;

    var funcionarios = JSON.parse(localStorage.getItem('funcionarios'));
    var pos = funcionarios.length;

    var func = new Object();
    func.nome = nome;
    func.cpf = cpf;
    func.email = email;
    func.senha = senha;
    func.cargo = cargo;
    func.cadas_func = cadas_func;
    func.cadas_pass = cadas_pass;
    func.checkin = checkin;
    func.passagens = passagens;

    funcionarios[pos] = func;
    localStorage.setItem('funcionarios', JSON.stringify(funcionarios));
    alert('Funcionário Cadastrado com Sucesso!');
    window.location.href = "admin.html";
}



function mostrar_funcionario(){
  var userlogado = JSON.parse(localStorage.getItem('userlogado'));
  if (userlogado.id != -1){
    var funcionarios = JSON.parse(localStorage.getItem('funcionarios'));
    var id = userlogado.id;
  
    var nome = document.getElementById('nome');
    var cpf = document.getElementById('cpf');
    var email = document.getElementById('email');
    var cargo = document.getElementById('cargo');
  
    nome.value = funcionarios[id].nome;
    cpf.value = funcionarios[id].cpf;
    email.value = funcionarios[id].email;
    cargo.value = funcionarios[id].cargo;
  }  
}

function autorizacoes(){
  var userlogado = JSON.parse(localStorage.getItem('userlogado'));
  if(userlogado.id != -1){
    var funcionarios = JSON.parse(localStorage.getItem('funcionarios'));
    var id = userlogado.id;
    var func = funcionarios[id];
    
    if(func.cadas_func == "nao"){
      var cadas_func = document.getElementById('cadas_func');
      cadas_func.style.display = "none";
    }
    if(func.cadas_pass == "nao"){
      var cadas_pass = document.getElementById('cadas_pass');
      cadas_pass.style.display = "none";
    }
    if(func.checkin == "nao"){
      var checkin = document.getElementById('checkin');
      checkin.style.display = "none";
    }
    if(func.passagens == "nao"){
      var voos = document.getElementById('voos');
      voos.style.display = "none";
    }
  }  
}