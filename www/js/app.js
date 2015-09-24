// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js

(function(){

angular
  .module('app', ['ionic', 'ngCookies'])
  .run(run)
  .config(config);

function run($ionicPlatform, $http, $state, $stateParams, $cookieStore, $rootScope){
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleLightContent();
    }
  });  

  $rootScope.globals = $cookieStore.get('globals') || {};
  
  if ($rootScope.globals.currentUser) {
    $http.defaults.headers.common['Authorization'] = 'Basic ' + $rootScope.globals.currentUser.authdata;
  }

  $rootScope.$on('$locationChangeStart', function (event, next, current) {  
    console.log($state.$current.url.source)
    if ($state.$current.url.source !== 'tab/login' && !$rootScope.globals.currentUser) {
      $state.go('tab.login');
    }
  });
}

function config($stateProvider, $urlRouterProvider){
  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
  .state('tab', {
      url: '/tab',
      abstract: true,
      templateUrl: 'templates/tabs.html'
  })
  .state('tab.login', {
      url: '/login',
      views: {
        'tab-login': {
          templateUrl: 'templates/tab-login.html',
          controller: 'AutenticacaoCtrl'
        }
      }
    })
  .state('tab.loja', {
      url: '/loja',
      views: {
        'tab-loja': {
          templateUrl: 'templates/tab-loja.html',
          controller: 'LojaCtrl'
        }
      }
    })
  .state('tab.produto', {
    url: '/produto',
    views: {
      'tab-produto': {
        templateUrl: 'templates/tab-produto.html',
        controller: 'ProdutoCtrl'
      }
    }
  })
  .state('tab.produto-add', {
    url: '/produto-add',
    views: {
      'tab-produto': {
        templateUrl: 'templates/tab-produto-add.html',
        controller: 'ProdutoCtrl'
      }
    }
  })
  .state('tab.produto-detalhe', {
    url: '/produto-detalhe/:produtoId',
    views: {
      'tab-produto': {
        templateUrl: 'templates/tab-produto-add.html',
        controller: 'ProdutoCtrl'
      }
    }
  })
  .state('tab.cliente', {
    url: '/cliente',
    views: {
      'tab-cliente': {
        templateUrl: 'templates/tab-cliente.html',
        controller: 'ClienteCtrl'
      }
    }
  })
  .state('tab.cliente-add', {
    url: '/cliente-add',
    views: {
      'tab-cliente': {
        templateUrl: 'templates/tab-cliente-add.html',
        controller: 'ClienteCtrl'
      }
    }
  })
  .state('tab.cliente-detalhe', {
    url: '/cliente-detalhe/:clienteId',
    views: {
      'tab-cliente': {
        templateUrl: 'templates/tab-cliente-add.html',
        controller: 'ClienteCtrl'
      }
    }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/login');
}

})();