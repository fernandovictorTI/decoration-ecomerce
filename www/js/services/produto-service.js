(function(){

	angular
    	.module('app')
    	.factory('ProdutoService', ProdutoService);

    function ProdutoService(){
    	
    	var produtos = [{
      id: 0,
      nome: 'Almofada 35x26 cm - Coruja Colorida T88',
      descricao: 'Você quem gosta de cores fortes e marcantes nas decorações de sua casa ? Então essa almofada da Coruja Colorida foi feita especialmente para você. ',
      preco : 21.90,
      foto: 'http://casaamerica.vteximg.com.br/arquivos/ids/208633-480-480/T880Colorida.jpg'
    }, {
      id: 1,
      nome: 'Tapete Infantil Formato Coroa Castor 64 x 86 cm',
      descricao: 'O quarto das crianças precisa ser colorido e divertido e para isso, nada melhor que o Tapete Infantil da Guga Tapetes para fazer parte da decoração e deixar o ambiente ainda mais aconchegante.',
      preco : 48.98,
      foto: 'http://casaamerica.vteximg.com.br/arquivos/ids/204274-480-480/GT151CA-151_1.jpg'
    }, {
      id: 2,
      nome: 'Saco de Dormir Silverton - Coleman',
      descricao: 'O saco de dormir Silverton Coleman é fabricado em tecido Poliéster Ripstop na parte exterior e forro de poliéster, térmico e resistente a baixas temperaturas, esse saco de dormir será seu companheiro inseparável de acampamento.',
      preco : 264.84,
      foto: 'http://casaamerica.vteximg.com.br/arquivos/ids/195441-480-480/110120015768-LA_1.jpg'
    }, {
      id: 3,
      nome: 'Kit Berço Marinheiro 8 Peças com Mosquiteiro - Batistela Baby',
      descricao: 'O berço do bebê é o cantinho mais aconchegante depois do colo dos pais. Pensando em segurança e praticidade a Batistela Baby Confeccionou o Kit Berço Marinheiro 8 Peças.',
      preco : 367.46,
      foto: 'http://casaamerica.vteximg.com.br/arquivos/ids/172494-480-480/CT-4989G_Kit-Berco-Marinheiro_A.jpg'
    }, {
      id: 4,
      nome: 'Cômoda Favo de Mel 4 Gavetas Branco/Lino-Mel - Henn',
      descricao: 'Composta em madeira MDP, o produto tem um lindo acabamento, além disso, é super espaçosa e dividida de maneira adequada e organizada para você guardar os produtos do seu filho, fazendo assim com que o ambiente seja bonito e prático também para a mamãe.',
      preco : 445.20,
      foto: 'http://casaamerica.vteximg.com.br/arquivos/ids/175325-480-480/198424_1.jpg'
    }];

    var add = function(produto){
      produtos.push(produto);
    }

    var all = function(){
    	return produtos;
    }

    var remove = function(produto){
    	produtos.splice(produtos.indexOf(produto), 1)
    }

    var get = function(produtoId){
    	for (var i = 0; i < produtos.length; i++) {
          if (produtos[i].id === parseInt(produtoId)) {
            return produtos[i];
          }
        }

        return null;
    }

    return {
      all: all,
      remove: remove,
      get: get,
      add : add
    };

    }

})();