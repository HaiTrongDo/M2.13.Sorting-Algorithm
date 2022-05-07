"use strict";
exports.__esModule = true;
var SelectionSort_1 = require("./SelectionSort");
SelectionSort_1.SelectionSort.selectionSort(SelectionSort_1.SelectionSort.list);
for (var i = 0; i < SelectionSort_1.SelectionSort.list.length; i++)
    console.log(SelectionSort_1.SelectionSort.list[i] + " ");
