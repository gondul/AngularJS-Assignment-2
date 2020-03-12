(function () {
    'use strict';

    angular.module('ShoppingListCheckOff', [])
        .controller('ToBuyController', ToBuyController)
        .controller('AlreadyBoughtController', AlreadyBoughtController)
        .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

    ToBuyController.$inject = ['ShoppingListCheckOffService'];
    function ToBuyController (ShoppingListCheckOffService) {
        let toBuy = this;

        toBuy.items = ShoppingListCheckOffService.getItemsToBuy();

        toBuy.buyItem = function (itemIndex) {
            ShoppingListCheckOffService.buyItem(itemIndex);
        };
    }
    AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
    function AlreadyBoughtController (ShoppingListCheckOffService) {
        let alreadyBought = this;

        alreadyBought.items = ShoppingListCheckOffService.getItemsBought();
    }
    function ShoppingListCheckOffService() {
        let service = this;

        let itemsToBuy = [];
        let itemsBought = [];

        itemsToBuy = InitialiseBuyList();

        service.getItemsToBuy = function () {
            return itemsToBuy;
        };

        service.getItemsBought = function () {
            return itemsBought;
        };

        service.buyItem = function (itemIndex) {
            let removedItems = itemsToBuy.splice(itemIndex,1);
            itemsBought.push(removedItems[0]);
        };
    }
    function InitialiseBuyList() {
        return [{name: "Cookies", quantity: 10},
            {name: "Chips", quantity: 6},
            {name: "Happiness", quantity: 1},
            {name: "Wet Wipes", quantity: 1},
            {name: "RDR2", quantity: 1}];
    }
})();