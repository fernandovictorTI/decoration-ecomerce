(function(){

	angular
    .module('app')
    .controller('AutenticacaoCtrl', AutenticacaoCtrl);

    function AutenticacaoCtrl($scope, $state, AutenticacaoService){

        $scope.addCliente = addCliente;
    	$scope.logar = logar;
    	AutenticacaoService.clearCredentials();

        function addCliente(){
            $state.go('tab.cliente-add');
        }

    	function logar(cliente){

            var clienteLogado = AutenticacaoService.login(cliente);

    		if(clienteLogado != null || clienteLogado != undefined){
    			AutenticacaoService.setCredentials(clienteLogado);
    			$state.go("tab.loja");
    		}else{
				$ionicPopup.alert({title : 'Usuário ou senha incorretos', subTitle : ''}).then(function(){
					$state.go('tab.login');
				});
    		}
    	}

    }

})();