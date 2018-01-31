$("#cnpj").blur(function() {
	
	console.log("********* CNPJ.JS");
	
	$.getJSON("https://www.receitaws.com.br/v1/cnpj/" + $("#cnpj").val() , function(dados) {
		$("#nome").val(dados.nome);
	
	})
});

