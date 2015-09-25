(function(){

	angular
		.module('app')
		.controller('CarrinhoCtrl', CarrinhoCtrl);

	function CarrinhoCtrl($scope, LojaService){

		$scope.clienteEmCompra = {};
		$scope.run = run;
		$scope.selecionarCliente = selecionarCliente;

		function run(){
		    if($rootScope.globals.currentUser != null || $rootScope.globals.currentUser != undefined){
		      selecionarCliente($rootScope.globals.currentUser);
		    }
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