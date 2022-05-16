"use strict";
exports.__esModule = true;
exports.Country = void 0;
var Country = /** @class */ (function () {
    function Country(name, gold, silver, bronze) {
        this.name = name;
        this.gold = gold;
        this.silver = silver;
        this.bronze = bronze;
        this.total = gold + silver + bronze;
    }
    return Country;
}());
exports.Country = Country;
