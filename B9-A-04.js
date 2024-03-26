/*function signature/sample */

function calculateMoney(ticketSale) {
    // You have to write your code here
    const ticketPrice = 120;
    const otherExpenses = 500 + (8 * 50)
    if (ticketSale >= 0) {
        const totalProfit = ticketSale * ticketPrice - otherExpenses;
        return totalProfit;
    }
    else {
        return "Invalid Input";
    }
}

/*function signature/sample */

function checkName(name) {
    // You have to write your code here
    if (typeof name !== 'string' || name.length === 0) {
        return "Invalid";
    }

    const goodChars = ['a', 'y', 'i', 'e', 'o', 'u', 'w', 'A', 'Y', 'I', 'E', 'O', 'U', 'W'];

    const lastChar = name[name.length - 1];

    if (goodChars.includes(lastChar)) {
        return "Good Name";
    } else {
        return "Bad Name";
    }
}


/*function signature/sample */

function deleteInvalids(array) {
    // You have to write your code here
    if (!Array.isArray(array)) {
        return "Invalid Array";
    }

    let arr = [];

    for (let i = 0; i < array.length; i++) {
        if (typeof array[i] === "number" && !isNaN(array[i])) {
            arr.push(array[i]);
        }
    }
    return arr;
}


/*function signature/sample */

function password(obj) {
    // You have to write your code here
    if (obj === null || typeof obj !== 'object') {
        return "invalid";
    }

    const { name, birthYear, siteName } = obj;

    if (!name || !birthYear || !siteName || birthYear < 999 || birthYear > 10000) {
        return "invalid";
    }

    return password = `${siteName.charAt(0).toUpperCase() + siteName.slice(1)}#${name.toLowerCase()}@${birthYear}`;

}


/*function signature/sample */

function monthlySavings(arr, livingCost) {
    // You have to write your code here
    if (!Array.isArray(arr) || typeof livingCost !== 'number') {
        return "invalid input";
    }

    let totalPayments = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= 3000) {
            totalPayments += arr[i] * 0.8; 
        } else {
            totalPayments += arr[i];
        }
    }

    let savings = totalPayments - livingCost;

    if (savings < 0) {
        return "earn more";
    } else {
        return savings;
    }
}
