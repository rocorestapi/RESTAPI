/*
*
* TASK 2
* 
*/

/*
*
* Class CALCULATOR
* It has one varaiable or property fo this class to save the operatiosn like Add, Mult, Div and Subs
* Additionally it has 5 functions to get the AVG, SUM total, Max and Min number given an array of numbers.
* 
*/
var Calculator = function ()
{
    // Main class property to save the operation result
    this.mainResult = 0;

    // Show the current result in mainResult property
    this.currentResult = function ()
    {
        console.log("Current main result is :", this.mainResult);
    }
    // Show all results of AVG, SUM, MAX and MIN functs
    this.calculateAll = function ()
    {
        console.log("AVG:", this.avgTest(arguments, 0));
        console.log("SUM:", this.sumTest(arguments, 0));
        console.log("MAX:", this.maxTest(arguments, 0, 0));
        console.log("MIN:", this.minTest(arguments, 0, 0));
    }

    // Get Max number given an array of numbers
    this.maxTest = function (numbers, max, pos)
    {
        if (pos == numbers.length - 1) {
            if (max > numbers[pos])
                return max;
            else
                return numbers[pos];
        }
        if (max < numbers[pos]) {
            return this.maxTest(numbers, numbers[pos], pos + 1);
        }
        return this.maxTest(numbers, max, pos + 1);
    }

    // Get Min number given an array of numbers
    this.minTest = function (numbers, min, pos)
    {
        if (pos == numbers.length - 1) {
            if (min < numbers[pos])
                return min;
            else
                return numbers[pos];
        }
        if (min > numbers[pos]) {
            return this.minTest(numbers, numbers[pos], pos + 1);
        }
        return this.minTest(numbers, min, pos + 1);

    }

    // Get AVG value given an array of numbers
    this.avgTest = function (numbers, pos)
    {
        if (pos == numbers.length - 1) {
            return (numbers[pos]) / (numbers.length);
        }
        return (numbers[pos] / numbers.length) + this.avgTest(numbers, pos + 1);
    }

    // Get total sum number given an array of numbers
    this.sumTest = function (numbers, pos) {
        if (pos == numbers.length - 1) {
            return numbers[pos];
        }
        return numbers[pos] + this.sumTest(numbers, pos + 1);
    }

    /*
    Math Operations
    */

    // Add to mainResult property a number sent as paramter
    this.addN = function (number1) {
        return this.mainResult = this.mainResult + number1;
    }

    // Subs to mainResult property a number sent as paramter
    this.subN = function (number1) {
        return this.mainResult = this.mainResult - number1;
    }

    // Mul to mainResult property a number sent as paramter
    this.multN = function (number1) {
        return this.mainResult = this.mainResult * number1;
    }

    // Div to mainResult property a number sent as paramter
    this.divN = function (number1) {
        return this.mainResult = this.mainResult / number1;
    }

}




