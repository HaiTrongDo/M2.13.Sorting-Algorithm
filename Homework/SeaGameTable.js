"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SeaGameTable = void 0;
var SeaGameTable = /** @class */ (function () {
    function SeaGameTable() {
        this.switch = false;
        this.countryTable = [];
    }
    SeaGameTable.prototype.insertCountry = function () {
        var _a;
        var country = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            country[_i] = arguments[_i];
        }
        (_a = this.countryTable).push.apply(_a, country);
    };
    SeaGameTable.prototype.swap = function (a, b) {
        var temp = this.countryTable[a];
        this.countryTable[a] = this.countryTable[b];
        this.countryTable[b] = temp;
    };
    SeaGameTable.prototype.SortTwoTargetCountryAndSwap = function (country1, country2) {
        if (country1.gold > country2.gold) {
            this.switch = true;
        }
        else if (country1.gold === country2.gold) {
            if (country1.silver > country2.silver) {
                this.switch = true;
            }
            else if (country1.silver == country2.silver) {
                if (country1.bronze > country2.bronze) {
                    this.switch = true;
                }
                else if (country1.bronze == country2.bronze) {
                    if (country1.name.localeCompare(country2.name) < 0) {
                        this.switch = true;
                    }
                }
            }
        }
        return this.switch;
    };
    SeaGameTable.prototype.bubbleSort = function () {
        var table = this.countryTable;
        for (var i = 0; i < table.length - 1; i++) {
            for (var j = table.length - 1; j > i; j--) {
                if (this.SortTwoTargetCountryAndSwap(table[j - 1], table[j])) {
                    this.swap(j - 1, j);
                    this.switch = false;
                }
            }
        }
    };
    SeaGameTable.status = true;
    return SeaGameTable;
}());
exports.SeaGameTable = SeaGameTable;
