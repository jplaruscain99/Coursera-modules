(function () {
'use strict';

var shoppingList = [
  {
    name: "Sandwich",
    quantity: 30
  },
  {
    name: "Donuts",
    quantity: 12
  },
  {
    name: "Milk",
    quantity: 4
  },
  {
    name: "Cookies",
    quantity: 10
  },
  {
    name: "Pepsi",
    quantity: 24
  },
];

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyShoppingController', ShoppingListController1)
.controller('AlreadyBoughtShoppingController', ShoppingListController2)
.service('ShoppingListCheckOffService', ShoppingListService);

/* ToBuyShoppingController */
ShoppingListController1.$inject = ['ShoppingListCheckOffService'];
function ShoppingListController1(ShoppingListCheckOffService) {
  var toBuyList = this;

  toBuyList.showItemsToBuy = ShoppingListCheckOffService.getItemsToBuy();

  toBuyList.transferItem = function (itemName, itemQty, itemIndex) {
    ShoppingListCheckOffService.transferItem(itemName, itemQty, itemIndex);
  };

}

/* AlreadyBoughtShoppingController */
ShoppingListController2.$inject = ['ShoppingListCheckOffService'];
function ShoppingListController2(ShoppingListCheckOffService) {
  var boughtList = this;

  boughtList.showBoughtItems = ShoppingListCheckOffService.getItemsBought();

}

/* ShoppingListCheckOffService */
function ShoppingListService() {
  var service = this;

  var itemToBuy = shoppingList;
  var itemBought = [];

  service.getItemsToBuy = function () {
    return itemToBuy;
  };

  service.getItemsBought = function () {
    return itemBought;
  };

  service.addItemToBuy = function (itemName, itemQty) {
    var item = {
      name: itemName,
      quantity: itemQty
    };
    itemToBuy.push(item);
  };

  service.removeItemToBuy = function (itemIndex) {
    itemToBuy.splice(itemIndex, 1);
  };

  service.addBoughtItem = function (itemName, itemQty) {
    var item = {
      name: itemName,
      quantity: itemQty
    };
    itemBought.push(item);
  };

  service.transferItem = function (itemName, itemQty, itemIndex) {
    service.addBoughtItem(itemName, itemQty);
    service.removeItemToBuy(itemIndex);
  }

}

})();
