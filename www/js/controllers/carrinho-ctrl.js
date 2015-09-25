(function(){

	angular
		.module('app')
		.controller('CarrinhoCtrl', CarrinhoCtrl);

	function CarrinhoCtrl($scope, LojaService, $state){

		$scope.clienteEmCompra = {};
		$scope.limparCarrinho = limparCarrinho;
		$scope.run = run;
		$scope.selecionarCliente = selecionarCliente;

		function limparCarrinho(){
			
			LojaService.limparCarrinho();

			$ionicPopup.alert({title : 'Carrinho limpado com sucesso.', subTitle : ''}).then(function(){
				$state.go('tab.loja');
			});
		}

		function run(){
			
			if(angular.isUndefined($rootScope.globals.currentUser)){
				$state.go('tab.login');
			}
		    
		    selecionarCliente($rootScope.globals.currentUser);
	    }

		function selecionarCliente(cliente){
			cliente.produtos = LojaService.allProdutos();
			$scope.clienteEmCompra = cliente;
		}

		if(Object.keys($scope.clienteEmCompra).length == 0){
			$scope.run();
		}

	}

})();