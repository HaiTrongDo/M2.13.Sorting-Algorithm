import {Country} from "./Country";


export class SeaGameTable {
    countryTable: Country[];
    static status = true;
    switch = false;

    constructor() {
        this.countryTable = []
    }

    insertCountry(...country: Country[]) {
        this.countryTable.push(...country);
    }


    swap(a, b) {
        let temp = this.countryTable[a];
        this.countryTable[a] = this.countryTable[b];
        this.countryTable[b] = temp;
    }

    SortTwoTargetCountryAndSwap(country1: Country, country2: Country) {
        if (country1.gold > country2.gold) {
            this.switch = true;
        } else if (country1.gold === country2.gold) {
            if (country1.silver > country2.silver) {
                this.switch = true;
            } else if (country1.silver == country2.silver) {
                if (country1.bronze > country2.bronze) {
                    this.switch = true;
                } else if (country1.bronze == country2.bronze) {
                    if (country1.name.localeCompare(country2.name) < 0) {
                        this.switch = true;
                    }
                }
            }
        }
        return this.switch;
    }


    bubbleSort() {
        let table = this.countryTable
        for (let i = 0; i < table.length - 1; i++) {
            for (let j = table.length - 1; j > i; j--) {
                if (this.SortTwoTargetCountryAndSwap(table[j - 1], table[j])) {
                    this.swap(j - 1, j)
                    this.switch = false;
                }
            }
        }
    }
}