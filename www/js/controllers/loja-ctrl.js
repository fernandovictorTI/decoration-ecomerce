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

    }

})();