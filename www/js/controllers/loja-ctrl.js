(function(){

  angular
    .module('app')
    .controller('LojaCtrl', LojaCtrl);

    function LojaCtrl($scope, $state, $ionicPopup, $stateParams, ClienteService, ProdutoService, $rootScope){
      
      $scope.run = run;
      $scope.selecionarCliente = selecionarCliente;
      $scope.clientes = ClienteService.all();
      $scope.clienteEmCompra = {};
      $scope.produtos = ProdutoService.all();
      $scope.addProduto = addProduto;

      function addProduto(item){

        if($scope.clienteEmCompra.produtos == undefined || $scope.clienteEmCompra.produtos == null){
          $scope.clienteEmCompra.produtos = [];
        }

        $scope.clienteEmCompra.produtos.push(item);

        console.log($scope.clienteEmCompra);
        
        var confirmPopup = $ionicPopup.confirm({
          title: 'Produto Adicionado com Sucesso',
          template: 'Deseja ir para o carrinho?'
        });

        confirmPopup.then(function(res) {
          if(res) {
            
          }
        });

      }

      function run(){
        if($rootScope.globals.currentUser != null || $rootScope.globals.currentUser != undefined){
          selecionarCliente($rootScope.globals.currentUser);
        }
      }

      function selecionarCliente(cliente){
        $scope.clienteEmCompra = cliente;
      }

      if(Object.keys($scope.clienteEmCompra).length == 0){
        $scope.run();
      }

    }

})();