
function segundoMaiorValor(arrayNumber: number[]): number {

    if (arrayNumber[0] === undefined || arrayNumber[1] === undefined) {
        throw new Error("O array deve ter pelo menos dois números.");
    }


    let largestNumberArray = -Infinity;
    let secondLargestNumberArray = -Infinity;

    let i = 0;


    while (arrayNumber[i] !== undefined) {
        let currentNumber = arrayNumber[i];

        if (currentNumber > largestNumberArray) {
            secondLargestNumberArray = largestNumberArray;
            largestNumberArray = currentNumber;
        } else if (currentNumber > secondLargestNumberArray && currentNumber !== largestNumberArray) {
            secondLargestNumberArray = currentNumber;
        }

        i++;
    }

    return secondLargestNumberArray;
}

console.log(segundoMaiorValor([10, 25, 3, 18])); 
console.log(segundoMaiorValor([50, 100, 99, 80])); 
console.log(segundoMaiorValor([5, 5, 5, 3])); 