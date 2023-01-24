function criar_conta(){
  var clientes = JSON.parse(localStorage.getItem('clientes'));
  var pos = clientes.length;
  
  var nome = document.getElementById('nome').value;
  var cpf = document.getElementById('cpf').value;
  var email = document.getElementById('email').value;
  var senha = document.getElementById('senha').value;

  var cliente = new Object();
  cliente.nome = nome;
  cliente.cpf = cpf;
  cliente.email = email;
  cliente.senha = senha;
  
  clientes[pos] = cliente;
  localStorage.setItem('clientes', JSON.stringify(clientes));
  window.location.href="login.html"; 
}

function mostrarconta(){
  var userlogado = JSON.parse(localStorage.getItem('userlogado')); 
  var clientes = JSON.parse(localStorage.getItem('clientes'));
  var cliente = clientes[userlogado.id];

  var nome = document.getElementById('nome');
  var cpf = document.getElementById('cpf');
  var email = document.getElementById('email');

  nome.value = cliente.nome;
  cpf.value = cliente.cpf;
  email.value = cliente.email;
}