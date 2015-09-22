(function(){

  angular
    .module('app')
    .controller('LojaCtrl', LojaCtrl);

    function LojaCtrl($scope, $state, $ionicPopup, $stateParams, ClienteService, ProdutoService){
      
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

        $scope.popup = $ionicPopup.show({
        template: '<ul class="list"><li ng-repeat="cliente in clientes"> <button class="button button-block button-calm" ng-click="selecionarCliente(cliente)">{{cliente.nome}}</button></li></ul>',
        title: 'Selecione um cliente',
        subTitle: '',
        scope: $scope        
        });

      }

      function selecionarCliente(cliente){
        $scope.popup.close();
        $scope.clienteEmCompra = cliente;
      }

      if(Object.keys($scope.clienteEmCompra).length == 0){
        $scope.run();
      }

    }

})();