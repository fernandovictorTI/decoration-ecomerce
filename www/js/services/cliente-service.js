(function(){

	angular
    	.module('app')
    	.factory('ClienteService', ClienteService);

    function ClienteService(){
    	
		var clientes = [      
	      {
	        id : 1, 
	        nome : 'Fernando', 
	        sobrenome : 'Victor', 
	        email : 'fernandovictorti@gmail.com'
	      }
	    ];

	    var add = function(cliente){
	      clientes.push(cliente);
	    }

	    var all = function(){
	      return clientes;
	    }

	    var get = function(clienteId){

	        for (var i = 0; i < clientes.length; i++) {
	          if (clientes[i].id === parseInt(clienteId)) {
	            return clientes[i];
	          }
	        }

	        return null;

	    }

	    var remove = function(produto){

	      clientes.splice(clientes.indexOf(produto), 1);

	    }

	    return {
	      all : all,
	      add : add,
	      get : get,
	      remove : remove
	    }

    }

})();