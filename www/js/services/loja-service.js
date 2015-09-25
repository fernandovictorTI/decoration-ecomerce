(function(){

	angular
    	.module('app')
    	.factory('LojaService', LojaService);

    function LojaService(){
    	
    	var produtos = [];    	

        var allProdutos = function(){
        	return produtos;
        }

        var limparCarrinho = function(){
			produtos = [];
        }

		var removerProduto = function(produto){
        	produtos.splice(produtos.indexOf(produto), 1)
        }

        var updateCarrinho = function (produto) {  
    		produtos.push(produto);
        };

        return {
        	allProdutos : allProdutos,
        	limparCarrinho : limparCarrinho,
        	removerProduto : removerProduto,
        	updateCarrinho : updateCarrinho
        }
    }


})();