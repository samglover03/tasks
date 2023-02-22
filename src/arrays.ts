/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    const copyBookEnd = [...numbers];
    if (copyBookEnd.length === 0) {
        return [];
    } else if (copyBookEnd.length === 1) {
        return [...copyBookEnd, ...copyBookEnd];
    } else {
        return [copyBookEnd[0], copyBookEnd[copyBookEnd.length - 1]];
    }
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    const tripled = numbers.map((numbers: number): number => numbers * 3);
    return tripled;
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    const convertedInts = numbers.map((numbers: string): number =>
        parseInt(numbers) ? parseInt(numbers) : 0
    );
    return convertedInts;
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    // Removing dollar signs if they have one
    const dollarsRemoved = amounts.map((amounts: string): string =>
        amounts.charAt(0) === "$" ? amounts.substring(1) : amounts
    );
    // Converting strings to ints
    const dollarNumbers = dollarsRemoved.map((amounts: string): number =>
        parseInt(amounts) ? parseInt(amounts) : 0
    );
    return dollarNumbers;
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    const removeQuestions = messages.filter(
        (messages: string): boolean => !messages.includes("?")
    );
    const makeUppercase = removeQuestions.map((messages: string): string =>
        messages.endsWith("!") ? messages.toUpperCase() : messages
    );
    return makeUppercase;
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    const countShort = words.map((words: string): number =>
        words.length < 4 ? 1 : 0
    );
    const sum = countShort.reduce(
        (currentTotal: number, num: number) => currentTotal + num,
        0
    );
    return sum;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    if (colors.length === 0) {
        return true;
    } else {
        const allColors = colors.every(
            (colors: string): boolean =>
                colors === "red" || colors === "blue" || colors == "green"
        );
        return allColors;
    }
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    const calculateSum = addends.reduce(
        (currentTotal: number, num: number) => currentTotal + num,
        0
    );
    const theNumbers = addends.join("+");
    if (addends.length === 0) {
        return calculateSum + "=" + 0;
    } else {
        return calculateSum + "=" + theNumbers;
    }
}

/**
 * Consumes an array of numbers and produces a new array of the same numbers,
 * with one difference. After the FIRST negative number, insert the sum of all
 * previous numbers in the list. If there are no negative numbers, then append
 * the sum to the list.
 *
 * For instance, the array [1, 9, -5, 7] would become [1, 9, -5, 10, 7]
 * And the array [1, 9, 7] would become [1, 9, 7, 17]
 */
export function injectPositive(values: number[]): number[] {
    // If there are no negative nums, return array with sum at end
    if (values.every((values: number): boolean => values >= 0)) {
        const firstSum = values.reduce(
            (currentTotal: number, num: number) => currentTotal + num,
            0
        );
        const fixedArray = [...values, firstSum];
        return fixedArray;
    } else {
        // Finding index of the first negative number
        const firstNegative = values.findIndex(
            (values: number): boolean => values <= 0
        );
        // Adding the numbers before the first neg num to a new array
        const firstNums = values
            .slice(0, firstNegative)
            .map((values: number): number => values);
        // Adding the sum of those numbers up
        const sum = firstNums.reduce(
            (currentTotal: number, num: number) => currentTotal + num,
            0
        );
        const fixedArray = [...values];
        fixedArray.splice(firstNegative + 1, 0, sum);
        return fixedArray;
    }
}
