/**
 * Scientific Calculator
 * This calculator supports basic arithmetic operations as well as advanced scientific functions.
 */

class ScientificCalculator {
    // ...existing code...

    /**
     * Calculates the square root of a number.
     * @param {number} num - The number to find the square root of.
     * @returns {number} The square root of the input number.
     */
    sqrt(num) {
        if (num < 0) throw new Error("Cannot calculate the square root of a negative number.");
        return Math.sqrt(num);
    }

    /**
     * Calculates the power of a number.
     * @param {number} base - The base number.
     * @param {number} exponent - The exponent to raise the base to.
     * @returns {number} The result of base raised to the power of exponent.
     */
    power(base, exponent) {
        return Math.pow(base, exponent);
    }

    /**
     * Calculates the sine of an angle in radians.
     * @param {number} radians - The angle in radians.
     * @returns {number} The sine of the angle.
     */
    sine(radians) {
        return Math.sin(radians);
    }

    /**
     * Calculates the cosine of an angle in radians.
     * @param {number} radians - The angle in radians.
     * @returns {number} The cosine of the angle.
     */
    cosine(radians) {
        return Math.cos(radians);
    }

    /**
     * Calculates the tangent of an angle in radians.
     * @param {number} radians - The angle in radians.
     * @returns {number} The tangent of the angle.
     */
    tangent(radians) {
        return Math.tan(radians);
    }

    /**
     * Calculates the natural logarithm (base e) of a number.
     * @param {number} num - The number to find the logarithm of.
     * @returns {number} The natural logarithm of the input number.
     */
    log(num) {
        if (num <= 0) throw new Error("Cannot calculate the logarithm of a non-positive number.");
        return Math.log(num);
    }
}

// Example usage:
// const calc = new ScientificCalculator();
// console.log(calc.sqrt(16)); // 4
// console.log(calc.power(2, 3)); // 8
// console.log(calc.sine(Math.PI / 2)); // 1
// console.log(calc.log(Math.E)); // 1
