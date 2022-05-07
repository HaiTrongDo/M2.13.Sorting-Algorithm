export class BubbleSort {
    static list: number[] = [2, 3, 2, 5, 6, 1, -2, 3, 14, 12];

    public static bubbleSort(list: number[]): void {
        let needNextPass: boolean = true;

        for (let i = 0; i < BubbleSort.list.length && needNextPass; i++) {
            needNextPass = false;

            for (let j = BubbleSort.list.length; j > i ; j--) {
                if(BubbleSort.list[j] < BubbleSort.list[j - 1]){
                // console.log(`swap ${BubbleSort.list[j]} and ${BubbleSort.list[j - 1]}`)
                let temp = BubbleSort.list[j];
                BubbleSort.list[j] = BubbleSort.list[j - 1];
                BubbleSort.list[j - 1] = temp;
                needNextPass =  true;
                }
            }
        }
    }
}