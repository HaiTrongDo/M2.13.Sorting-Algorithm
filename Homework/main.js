"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Country_1 = require("./Country");
var SeaGameTable_1 = require("./SeaGameTable");
var VietNam = new Country_1.Country("VietNam", 68, 46, 41);
var Thailand = new Country_1.Country("ThaiLand", 24, 23, 41);
var Philippines = new Country_1.Country("Philippines", 20, 27, 37);
var Indonesia = new Country_1.Country("Indonesia", 18, 27, 37);
var standingTable = new SeaGameTable_1.SeaGameTable();
standingTable.insertCountry(Philippines, Thailand, Indonesia, VietNam);
// console.log(standingTable.countryTable);
standingTable.bubbleSort();
standingTable.countryTable.forEach(function (element) {
    console.log(element.name, "Gold ".concat(element.gold), "Gold ".concat(element.silver), "Gold ".concat(element.bronze), "total metal ".concat(element.total));
});
// console.log(standingTable.countryTable);
