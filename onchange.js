function child(){
  var nchild = document.getElementById("criancas").value;
  var idade_child = document.getElementById("idade_child");
  idade_child.innerHTML = "";
  for (var i = 1; i <= nchild; i++){
    var div = document.createElement("div");
    div.setAttribute('class', 'ml-3');
     
    var label = document.createElement("label");
    var text = document.createTextNode("Idade Criança "+i);
    label.appendChild(text);
    br = document.createElement("br");
    div.appendChild(label);
    div.appendChild(br);
    
    var select = document.createElement("select"); 
    select.setAttribute('class', 'custom-select');

    var selected = document.createElement('option');
    selected.setAttribute('selected', 'selected');
    select.appendChild(selected);
    
    for (var j = 1; j <=12 ; j++){
      var option = document.createElement('option');
      option.setAttribute('value', j);
      var num = document.createTextNode(j);
      option.appendChild(num);
      select.appendChild(option);
    }
   
    div.appendChild(select);
    idade_child.appendChild(div);    
  }
  idade_child.style.display = 'block';
}

function apenasida(){
  var opcao = document.getElementById('opcao_viagem').value;
  if(opcao == "ida"){
    var data_volta = document.getElementById('div_volta').style.display = 'none';    
  }else{
    if(opcao == "idavolta"){
      var data_volta = document.getElementById('div_volta').style.display = 'block';    
    }
  }
}

function alterarbusca(){
  console.log('Teste');
  var mostrar_pesquisa = document.getElementById('mostrar_pesquisa').style.display = 'none';
  var popup_pesquisar = document.getElementById('popup_pesquisar').style.display = 'block';
}