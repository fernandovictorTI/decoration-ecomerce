(function(){

  angular
    .module('app')
    .controller('ProdutoCtrl', ProdutoCtrl);

    function ProdutoCtrl($scope, ProdutoService, $state, $ionicPopup, $stateParams){
      
      $scope.add = add;
      $scope.addProduto = addProduto;
      $scope.isDisabled = false;
      $scope.produtos = ProdutoService.all();
      $scope.remove = remove;            

      if($stateParams.produtoId != null){
        $scope.produto = ProdutoService.get($stateParams.produtoId);
        $scope.isDisabled = true;
      }

      function add(){
        $state.go('tab.produto-add');
      }

      function addProduto(produto){

        ProdutoService.add(produto);

        $ionicPopup.alert({title : 'Produto Cadastrado', subTitle : ''}).then(function(){
          $state.go('tab.produto');
        });

      }

      function remove(produto){

        var confirmPopup = $ionicPopup.confirm({
          title: 'Excluir Produto',
          template: 'Deseja mesmo excluir esse produto?'
        });

        confirmPopup.then(function(res) {
          if(res) {
            ProdutoService.remove(produto);
          }
        });
      }      
    }

})();