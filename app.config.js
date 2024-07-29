angular.module('ecommerceApp').config(function($routeProvider) {
  $routeProvider
    .when('/products', {
      template: '<product-list></product-list>'
    })
    .otherwise({
      redirectTo: '/products'
    });
});
