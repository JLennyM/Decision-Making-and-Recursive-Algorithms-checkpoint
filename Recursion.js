// fibonacci
function fibonacci(n) {
    // Base cases
    if (n === 0) return 0;
    if (n === 1) return 1;

    // Recursive case
    return fibonacci(n - 1) + fibonacci(n - 2);
}

// Example usage:
const nthFibonacci = fibonacci(10); // Change the number to get the nth Fibonacci number
console.log(nthFibonacci); // Outputs: 55



//Palindrome Checker
function isPalindrome(str) {
    // Remove spaces, punctuation, and convert to lowercase
    const cleanStr = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();

    // Helper recursive function
    function checkPalindrome(cleanStr, start, end) {
        // Base case
        if (start >= end) return true;
        
        // Recursive case
        if (cleanStr[start] === cleanStr[end]) {
            return checkPalindrome(cleanStr, start + 1, end - 1);
        } else {
            return false;
        }
    }

    // Start the recursion
    return checkPalindrome(cleanStr, 0, cleanStr.length - 1);
}

// Example usage:
const testString = "A man, a plan, a canal, Panama";
const result = isPalindrome(testString);
console.log(result); // Outputs: true
