(function(){

	angular
    .module('app')
    .factory('AutenticacaoService', AutenticacaoService);

    function AutenticacaoService($http, $rootScope, $cookieStore, ClienteService){


    	var setCredentials = function (cliente) {
  
            $rootScope.globals = {
                currentUser : cliente
            };
  
            $http.defaults.headers.common['Authorization'] = 'Basic ';
            $cookieStore.put('globals', $rootScope.globals);
        };
  
        var clearCredentials = function () {
            $rootScope.globals = {};
            $cookieStore.remove('globals');
            $http.defaults.headers.common.Authorization = 'Basic ';
        };

    	var login = function(cliente){

    		var clientes = ClienteService.all();

    		for (var i = 0; i < clientes.length; i++) {
	          if (clientes[i].email === cliente.email && clientes[i].senha === cliente.senha) {
	            return clientes[i];
	          }
	        }

	        return null;
    	}

    	return {
    		login : login, 
    		setCredentials : setCredentials,
    		clearCredentials : clearCredentials
    	}

    }

})();