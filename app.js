// Função para pesquisar e exibir os resultados
function pesquisar() {
    // Obtém a seção onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");
  
    let campoPesquisa = document.getElementById("campo-pesquisa").value;

	if (!campoPesquisa) {
		section.innerHTML = "<p>Informe algo para ser pesquisado!</p>"
		return
	}

	campoPesquisa = campoPesquisa.toLowerCase();

    console.log(campoPesquisa);

    // Inicializa a string que armazenará os resultados
    let resultados = "";
	let titulo = "";
	let descricao = "";
	let tags = "";
  
    // Itera sobre os dados e constrói o HTML para cada resultado
    for (let dado of dados) {
		titulo = dado.titulo.toLowerCase();
		descricao = dado.descricao.toLowerCase();
		tags = dado.tags.toLowerCase();
		// se titulo includesPesquisa
		if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
			// Cria um elemento div para cada resultado
			resultados += `
			<div class="item-resultado">
				<h2><a href="${dado.link}" target="_blank">${dado.titulo}</a></h2>
				<p class="descricao-meta">${dado.descricao} <a href="${dado.link}" target="_blank">Mais informações</a></p>
			</div>
			`;
		}
    }
  
	if (!resultados) {
		resultados = "<p>Nada foi encontrado!</p>";
	}

    // Atribui o HTML gerado à seção de resultados
    section.innerHTML = resultados;
  }