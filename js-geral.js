//cabeçalho
window.addEventListener("scroll", function() {
  var header = document.getElementById("header");
  var navbar = document.getElementById("navbar");

  if (window.pageYOffset > 150) {
    header.style.top = "-38vh";
    
    // Adicionar classe para iniciar a animação
    navbar.classList.add("navbar-fixed");
  } else {
    header.style.top = "0";

    // Remover classe para reverter a animação
    navbar.classList.remove("navbar-fixed");
  }
});

//seta
function controlarSeta() {
  document.querySelectorAll(".seta").forEach(function(seta) {
    seta.style.display = window.pageYOffset > 300 ? "inline" : "none";
  });
}
window.addEventListener("scroll", controlarSeta);
window.addEventListener("load", controlarSeta);




//alerta para o modo retrato ----desenvolver um processo que seja mais leve





//index:
// Animação dos atalhos
window.addEventListener("scroll", function () {
  const slide = document.getElementById("atalho-banco");
  const offsetTop = slide.offsetTop;

  if (window.pageYOffset + window.innerHeight > offsetTop + 50) {
    slide.classList.add("active");
  }
});

// Animação dos atalhos de forma independente
  window.addEventListener("scroll", function () {
  document.querySelectorAll(".atalho-sec-a").forEach((el) => {
    const offsetTop = el.getBoundingClientRect().top;

    // Ativa se o elemento estiver visível após 90% da altura da viewport
    if (offsetTop < window.innerHeight * 0.9) {
      el.classList.add("exibir");
    }
  });
});



//sobre: 

//ver mais nos parágrafos
    function exibirTextoCompleto1() {
      var textoCompleto = document.querySelector(".texto-completo-1");
      var linkVerMais = document.querySelector(".link-ver-mais-1");

      textoCompleto.style.display = "block"; // Exibe o texto completo
      linkVerMais.style.display = "none"; // Oculta o link "ver mais"
    }

    function exibirTextoCompleto2() {
      var textoCompleto = document.querySelector(".texto-completo-2");
      var linkVerMais = document.querySelector(".link-ver-mais-2");

      textoCompleto.style.display = "block"; // Exibe o texto completo
      linkVerMais.style.display = "none"; // Oculta o link "ver mais"
    }

//mapa:

//exibe e oculta as infos do mapa
window.addEventListener("scroll", function() {
  var elements = document.querySelectorAll(".exibirInformacoes");

  for (var i = 0; i < elements.length; i++) {
    if (window.pageYOffset > 600) {
      elements[i].style.display = "none";

    }
  }
});
// Função para esconder o elemento 'info-map'
function limparMap(){
  var infomap = document.getElementById("info-map");
  infomap.style.display = 'none';
}
document.getElementById("local-map").addEventListener("click", limparMap);


//: clicar no link e ele será copiado para a area de transferencia
    
    function copiarLink(texto) {
      const textarea = document.createElement('textarea');
      textarea.value = texto;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);

      const mensagemCopiado = document.getElementById('mensagem-copiado');
      mensagemCopiado.style.display = 'block';
      setTimeout(() => {
        mensagemCopiado.style.display = 'none';
      }, 2000); // Esconde a mensagem após 2 segundos
    }

//: mostrador do montante painel de dados 



document.addEventListener('DOMContentLoaded', () => {

  fetch('https://docs.google.com/spreadsheets/d/e/2PACX-1vQN3tihC9fA9hwIDLwI9stuL1-UQOZVubJ6G0_bOMDej3TUySXK-yO9unf3sbW40ph9HEv6-1DH2XN-/pub?gid=1188344285&single=true&output=csv')
    .then(r => r.text())
    .then(csv => {

      const linhas = csv.trim().split('\n');

      function getLinha(nome) {
        return linhas.find(l =>
          l.toLowerCase().startsWith(nome.toLowerCase())
        );
      }

      function getMontante(nome) {
        const linha = getLinha(nome);
        if (!linha) return '-';

        const partes = linha.split(',');
        return partes[1] ? partes[1].trim() : '-';
      }

      function getFecha(nome) {
        const linha = getLinha(nome);
        if (!linha) return '-';

        const partes = linha.split(',');
        return partes[2] ? partes[2].trim() : '-';
      }

      function set(id, valor) {
        const el = document.getElementById(id);
        if (el) el.innerText = valor;
      }

      set('b2', getMontante('Argentina'));
      set('b3', getMontante('Brasil'));
      set('b4', getMontante('Chile'));
      set('b5', getMontante('Colombia'));
      set('b6', getMontante('Cuba'));
      set('b7', getMontante('Mexico'));
      set('b8', getMontante('Total'));

      set('c2', getFecha('Argentina'));

    })
    .catch(e => console.error(e));

});
});
