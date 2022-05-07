"use strict";
exports.__esModule = true;
exports.SelectionSort = void 0;
var SelectionSort = /** @class */ (function () {
    function SelectionSort() {
    }
    SelectionSort.selectionSort = function (list) {
        for (var i = 0; i < list.length - 1; i++) {
            /* Find the minimum in the list[i..list.length-1] */
            var currentMin = list[i];
            var currentMinIndex = i;
            for (var j = i + 1; j < list.length; j++) {
                if (currentMin > list[j]) {
                    currentMin = list[j];
                    currentMinIndex = j;
                }
            }
            /* Swap list[i] with list[currentMinIndex] if necessary */
            if (currentMinIndex != i) {
                list[currentMinIndex] = list[i];
                list[i] = currentMin;
            }
        }
    };
    SelectionSort.list = [1, 9, 4.5, 6.6, 5.7, -4.5];
    return SelectionSort;
}());
exports.SelectionSort = SelectionSort;
