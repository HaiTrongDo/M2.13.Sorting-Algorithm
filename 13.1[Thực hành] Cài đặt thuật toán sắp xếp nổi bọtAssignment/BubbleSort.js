"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BubbleSort = void 0;
var BubbleSort = /** @class */ (function () {
    function BubbleSort() {
    }
    BubbleSort.bubbleSort = function (list) {
        var needNextPass = true;
        for (var i = 0; i < BubbleSort.list.length && needNextPass; i++) {
            needNextPass = false;
            for (var j = BubbleSort.list.length; j > i; j--) {
                if (BubbleSort.list[j] < BubbleSort.list[j - 1]) {
                    var temp = BubbleSort.list[j];
                    BubbleSort.list[j] = BubbleSort.list[j - 1];
                    BubbleSort.list[j - 1] = temp;
                    needNextPass = true;
                }
            }
        }
    };
    BubbleSort.list = [2, 3, 2, 5, 6, 1, -2, 3, 14, 12];
    return BubbleSort;
}());
exports.BubbleSort = BubbleSort;
