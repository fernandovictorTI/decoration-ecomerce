(function(){

  angular
    .module('app')
    .controller('LojaCtrl', LojaCtrl);

    function LojaCtrl($scope, $state, $ionicPopup, $stateParams, ClienteService, ProdutoService, $rootScope, LojaService){
      
      $scope.addProduto = addProduto;
      $scope.clientes = ClienteService.all();
      $scope.clienteEmCompra = {};
      $scope.produtos = ProdutoService.all();
      $scope.run = run;
      $scope.selecionarCliente = selecionarCliente;

      function addProduto(item){

        LojaService.updateCarrinho(item);

        var confirmPopup = $ionicPopup.confirm({
          title: 'Produto Adicionado com Sucesso',
          template: 'Deseja ir para o carrinho?'
        });

        confirmPopup.then(function(res) {
          if(res) {
            $state.go('tab.carrinho')
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