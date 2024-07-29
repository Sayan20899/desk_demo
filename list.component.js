angular.module('ecommerceApp').component('productList', {
  templateUrl: 'app/components/product-list/product-list.template.html',
  controller: function ProductListController() {
    this.products = [
      { name: 'Product 1', price: 29.99 },
      { name: 'Product 2', price: 39.99 },
      { name: 'Product 3', price: 49.99 }
    ];
  }
});
