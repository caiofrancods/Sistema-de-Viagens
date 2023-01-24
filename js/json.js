if (!localStorage.passagens) {
  var passagens = [];
  localStorage.setItem('passagens', JSON.stringify(passagens));
}
if (!localStorage.userlogado) {
  var userlogado = new Object();
  userlogado.escopo = "Deslogado";
  userlogado.id = -1;
  localStorage.setItem('userlogado', JSON.stringify(userlogado));
}
if (!localStorage.clientes) {
  var clientes = [];
  localStorage.setItem('clientes', JSON.stringify(clientes));
}
if (!localStorage.funcionarios) {
  var funcionarios = [];
 var func = new Object();
  func.nome = "Admin";
  func.cpf = 12345;
  func.email = "admin@admin";
  func.senha = "12345";
  func.cargo = "Diretor";
  func.cadas_func = "sim";
  func.cadas_pass = "sim";
  func.checkin = "sim";
  func.passagens = "sim";
  funcionarios[0] = func;
  localStorage.setItem('funcionarios', JSON.stringify(funcionarios));
}