(function(){

  angular
    .module('app')
    .controller('ClienteCtrl', ClienteCtrl);

    function ClienteCtrl($scope, ClienteService, $state, $ionicPopup, $stateParams){
      
      $scope.add = add;
      $scope.addCliente = addCliente;
      $scope.cliente = {};
      $scope.clientes = ClienteService.all();
      $scope.isDisabled = false;
      $scope.remove = remove;   

      if($stateParams.clienteId != null){
        $scope.cliente = ClienteService.get($stateParams.clienteId);
        $scope.isDisabled = true;
      }

      function add(){
        $state.go('tab.cliente-add');
      }

      function addCliente(cliente){
        ClienteService.add(cliente);

        $ionicPopup.alert({title : 'Cliente Cadastrado', subTitle : ''}).then(function(){
          $state.go('tab.cliente');
        });
      }

      function remove(cliente){

        var confirmPopup = $ionicPopup.confirm({
          title: 'Excluir Cliente',
          template: 'Deseja mesmo excluir esse cliente?'
        });

        confirmPopup.then(function(res) {
          if(res) {
            ClienteService.remove(cliente);
          }
        });

      }
      
    }

})();