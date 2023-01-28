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
  var tam = passagens.length;
  if(tam == 0){
    var msg = document.createElement('h5');
    msg.setAttribute('class', 'text-center mt-4');
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
      var text = document.createTextNode(passagens[i].origem+" - "+passagens[i].destino+" //// Data: "+passagens[i].data+"  Horário: "+passagens[i].hora);
      label.appendChild(text);
  
      var answer = document.createElement('div');
      answer.setAttribute('class', 'answer');
      //var text_answer = document.createTextNode("Origem: "+passagens[i].origem);
      var assentos = Number(passagens[i].bunisses)+Number(passagens[i].ecopremium)+Number(passagens[i].economy);
      answer.innerHTML = `<p class="mt-3">Origem: ${passagens[i].origem}</p>
      <p>Destino: ${passagens[i].destino}</p>
      <p>Quantidade de Assentos: ${assentos}</p>
      <p>Valor da Passagem Economy: ${passagens[i].valor}</p>
      <p>Piloto e Co-Piloto: ${passagens[i].piloto+" ; "+passagens[i].copiloto}</p>
      <p>Equipe de Comissários: ${passagens[i].comissarios}</p>
      <p>Cadastrado por: ${passagens[i].func}</p>`;

        
     //answer.appendChild(text_answer);
      
      question.appendChild(input);
      question.appendChild(label);
      question.appendChild(answer);
      corpo.appendChild(question);
    }
  }
}

function procurar_passagem(){
  var passagens = JSON.parse(localStorage.getItem('passagens'));
  var pos = passagens.length;
  var pesquisa = JSON.parse(localStorage.getItem('pesquisa'));
  
  var opcao_viagem = document.getElementById('opcao_viagem').value;
  var assento = document.getElementById('assento').value;
  var adultos = document.getElementById('adultos').value;
  var criancas = document.getElementById('criancas').value;
  var origem = document.getElementById('origem').value;
  var destino = document.getElementById('destino').value;
  var data_ida = document.getElementById('data_ida').value;

  if(opcao_viagem == "ida"){
    var ida = [];
    var k = -1
    var control = 0
    for (var i = 0; i<pos; i++){
      if(passagens[i].origem == origem & passagens[i].destino == destino & passagens[i].data == data_ida){
        if(assento == "bunisses"){
          var soma = Number(adultos)+ Number(criancas);
          if(passagens[i].bunisses >= soma){
            k = k+1
            ida[k] = i            
          }
        }else{
          if(assento == "ecopremium"){
            var soma = Number(adultos)+ Number(criancas);
            if(passagens[i].ecopremium >= soma){
              k = k+1
              ida[k] = i 
            }
          }else{
            if(assento == "economy"){
              var soma = Number(adultos)+ Number(criancas);
              if(passagens[i].economy >= soma){
                k = k+1
                ida[k] = i 
              }
            }
          }
        }        
      }
    } 
    var aux = new Object();
    if(opcao_viagem == "ida"){
      aux.viagem = "Apenas ida";
    }else{
      aux.viagem = "Ida e Volta";
    }
    aux.assento = assento;
    aux.adultos = adultos;
    aux.criancas = criancas;
    aux.data_ida = data_ida;
    aux.cidades = "Origem: "+origem+" || Destino: "+destino;
    aux.id = ida;    
    if (k == -1){
      aux.situacao = "nd";      
    }
    pesquisa = aux;
  }
  localStorage.setItem('pesquisa', JSON.stringify(pesquisa));
  window.location.href = "pesquisa.html"
}

function mostrar_pesquisa (){  
  var pesquisa = JSON.parse(localStorage.getItem('pesquisa'));
  var viagem = document.getElementById('viagem');
  var assento = document.getElementById('assento');
  var passageiros = document.getElementById('passageiros');
  var datas = document.getElementById('datas');
  var cidades = document.getElementById('cidades');
  viagem.value = pesquisa.viagem;
  assento.value = pesquisa.assento;
  passageiros.value = "Adultos: "+pesquisa.adultos+" || Crianças: "+pesquisa.criancas;
  if(viagem == "Apenas ida"){
    datas.value = pesquisa.data_ida;
  }else{
    datas.value = "Ida: "+pesquisa.data_ida+" || Volta: "+pesquisa.data_volta;
  }
  cidades.value = pesquisa.cidades;
  
  var div = document.getElementById('passagens'); 
  
  if (pesquisa.situacao == "nd"){
    div.innerHTML = `<h4 class="text-center" >Nenhuma Passagem Encontrada</h4>
    <p class="text-center" >Altere a busca e tente novamente</p>`;
  }else{
    
  }
}