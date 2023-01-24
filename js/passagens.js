function cadastrar_passagem(){
  var origem = document.getElementById('origem').value;
  var destino = document.getElementById('destino').value;
  var data = document.getElementById('data').value;
  var hora = document.getElementById('hora').value;
  var bunisses = document.getElementById('bunisses').value;
  var eco_premium = document.getElementById('eco_premium').value;
  var economy = document.getElementById('economy').value;
  var valor_passagem = document.getElementById('valor_passagem').value;
  var modelo_aviao = document.getElementById('modelo_aviao').value;
  var piloto = document.getElementById('piloto').value;
  var copiloto = document.getElementById('copiloto').value;
  var comissarios = document.getElementById('comissarios').value;

  var passagens = JSON.parse(localStorage.getItem('passagens'));
  var userlogado = JSON.parse(localStorage.getItem('userlogado'));
  var funcionarios = JSON.parse(localStorage.getItem('funcionarios'));
  var pos = passagens.length;

  var passagem = new Object();
  passagem.origem = origem;
  passagem.destino = destino;
  passagem.data = data;
  passagem.hora = hora;
  passagem.bunisses = bunisses;
  passagem.ecopremium = eco_premium;
  passagem.economy = economy;
  passagem.valor = valor_passagem;
  passagem.aviao = modelo_aviao;
  passagem.piloto = piloto;
  passagem.copiloto = copiloto;
  passagem.comissarios = comissarios;
  passagem.cadastro = Date();
  passagem.func = funcionarios[userlogado.id].nome;

  passagens[pos] = passagem;
  localStorage.setItem('passagens', JSON.stringify(passagens));
  window.location.href="fim_voo.html"; 
} 

function mostrarcadastro(){
  var passagens = JSON.parse(localStorage.getItem('passagens'));
  var pos = passagens.length - 1;
  var cadastro = document.getElementById('momento_cadastro');
  var text = document.createTextNode(passagens[pos].cadastro);
  cadastro.appendChild(text);
}

function mostrarpassagens(){
  var passagens = JSON.parse(localStorage.getItem('passagens'));
  var corpo = document.getElementById('corpo');
  
  if(passagens == null || passagens == []){
    var msg = document.createElement('h6');
    msg.setAttribute('class', 'text-center mt-3');
    var text_msg = document.createTextNode('Não há voos cadastrados');
    msg.appendChild(text_msg);
    corpo.appendChild(msg);
  }else{      
      var pos = passagens.length;
      for(var i = 0; i < pos; i++){
      var question = document.createElement('div');
      question.setAttribute('class', 'question border p-3 mt-3');
      
      var input = document.createElement('input');
      input.setAttribute('type', 'checkbox');
      input.setAttribute('id', 'question-'+i);
  
      var label = document.createElement('label');    
      label.setAttribute('for', 'question-'+i);
      var text = document.createTextNode('Passagem');
      label.appendChild(text);
  
      var answer = document.createElement('div');
      answer.setAttribute('class', 'answer');
      var text_answer = document.createTextNode("teste");
      answer.appendChild(text_answer);
      
      question.appendChild(input);
      question.appendChild(label);
      question.appendChild(answer);
      corpo.appendChild(question);
    }
  }
}
