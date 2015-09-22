(function(){

	angular
    .module('app')
    .controller('AutenticacaoCtrl', AutenticacaoCtrl);

    function AutenticacaoCtrl($scope, $state, AutenticacaoService){

    	$scope.login = login;
    	AutenticacaoService.clearCredentials();

    	function login(cliente){

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