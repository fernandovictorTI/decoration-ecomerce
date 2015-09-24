(function(){

	angular
    .module('app')
    .controller('AutenticacaoCtrl', AutenticacaoCtrl);

    function AutenticacaoCtrl($scope, $state, AutenticacaoService){

    	$scope.logar = logar;
    	AutenticacaoService.clearCredentials();

    	function logar(cliente){
    		if(AutenticacaoService.login(cliente)){
    			AutenticacaoService.setCredentials(cliente.email, cliente.senha);
    			$state.go("tab.loja");
    		}else{
				$ionicPopup.alert({title : 'Usuário ou senha incorretos', subTitle : ''}).then(function(){
					$state.go('tab.login');
				});
    		}
    	}

    }

})();