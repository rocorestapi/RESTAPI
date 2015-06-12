/*
* test
* */
console.log("test - MAIN.JS");

var name = "Leo";
var sayHello = function(name)
{
    console.log("Hello " + name);
}
var calculateYear = function (bornYear)
{
    age = 2015 - bornYear;
    return age;
}
/*
Given an araay of numbers, compute MAX, MIN, AVG, SUM
*/
var calculateAll = function()
{
    console.log("SUM:", sumTest(arguments, 0));
    console.log("SUM2:", sumTest2(arguments));
    console.log("AVG:", avgTest(arguments, 0));
    console.log("MAX:", maxTest(arguments, 0, 0));
    console.log("MIN:", minTest(arguments, 0, 0));
}

var sumTest = function(numbers, pos)
{
    if (pos == numbers.length - 1)
    {
        return numbers[pos];
    }
    return numbers[pos] + sumTest(numbers, pos + 1);
}

var sumTest2 = function(numbers, pos)
{   // OJO
    if (pos == null)
        pos = 0;
    // END OJO

    if (pos == numbers.length - 1)
    {
        return numbers[pos];
    }
    return numbers[pos] + sumTest(numbers, pos + 1);
}

var avgTest = function (numbers, pos)
{
    if (pos == numbers.length - 1)
    {
        return (numbers[pos]) / (numbers.length);
    }
    return (numbers[pos]/numbers.length)   + (sumTest(numbers, pos + 1)/numbers.length);
}


/*
var maxTest = function (numbers, max, pos)
{
    if (pos == numbers.length - 2)
    {
        if (numbers[pos] > numbers[pos + 1])
        {
            return numbers[pos];
        }
        else
            return numbers[pos + 1];
    }
    if (numbers[pos] > numbers[pos + 1])
    {
        numbers[pos + 1] = numbers[pos];
        return maxTest(numbers, max, pos + 1);
    }

    return maxTest(numbers, pos + 1);
}

*/
var maxTest = function (numbers, max, pos)
{
    if (pos == numbers.length - 1)
    {
        if (max > numbers[pos])
            return max;        
        else
            return numbers[pos];
    }
    if (max < numbers[pos])
    {
        return maxTest(numbers, numbers[pos], pos + 1);
    }
    return maxTest(numbers, max, pos + 1);
}

/*
var minTest = function (numbers, pos)
{
    for (var i = 0; i < numbers.length; i++)
    {
        console.log(numbers[i]);
    }

    console.log("***pos " + pos + "********************* = " + numbers[pos]);
    if (pos == numbers.length - 2)
    {
        console.log(numbers[pos] + "<" + numbers[pos + 1]);
        if (numbers[pos] < numbers[pos + 1])
        {
            //console.log("menor " + numbers[pos]);
            console.log("POS END " + [pos] + " min " + numbers[pos]);
            return numbers[pos];
        }
        else
        {
            console.log("POS END ESLE " + [pos] + " min " + numbers[pos + 1]);
            return numbers[pos + 1];
        }
    }
    console.log(numbers[pos] + "<" + numbers[pos + 1]);
    if (numbers[pos] < numbers[pos + 1])
    {
        //console.log("menor " + numbers[pos]);
//        console.log(numbers[pos] + "<" + numbers[pos + 1]);
        console.log("numbers[pos] " + numbers[pos]);
        console.log("numbers[pos + 1] " + numbers[pos + 1]);

        numbers[pos + 1] = numbers[pos];
        console.log("now numbers[pos + 1] is " + numbers[pos + 1]);
        return minTest(numbers, pos + 1);
    }
    return minTest(numbers, pos + 1);

}
*/

var minTest = function (numbers, min, pos)
{
    if (pos == numbers.length - 1)
    {
        if (min < numbers[pos])
            return min;
        else
            return numbers[pos];
    }
    if (min > numbers[pos])
    {
        return minTest(numbers, numbers[pos], pos + 1);
    }
    return minTest(numbers, min, pos + 1);

}


/*
Count words
*/
var countWords = function (paragraph) {
    return (paragraph.split(' ')).length;
}


/*
Print today DATE tand time PM or AM.
*/
var printDate = function () {
    var myDate = new Date();
    var myDay = "Dormingo";
    var myHour = myDate.getHours();
    var am_or_pm ="AM";
    if (myHour>=12)
    {
        am_or_pm = "PM"
    }
    if(myDate.getDay() == 1)
        myDay = "Lunes";
    else if (myDate.getDay() == 2)
        myDay = "Martes";
    else if (myDate.getDay() == 3)
        myDay = "Miercoles";
    else if (myDate.getDay() == 4)
        myDay = "Jueves";
    else if (myDate.getDay() == 5)
        myDay = "Viernes";
    else if (myDate.getDay() == 6)
        myDay = "Sabado";

    var dias= {'0':'Dormigo', '1': 'Lunes', '2': 'Martes', '3': 'Miercoles', '4': 'Jueves', '5': 'Viernes', '6': 'Sabado'};

    console.log("Today is: " +myDay);
    console.log("Time is: " + myHour + " "+ am_or_pm + " "+ myDate.getMinutes()+":" + myDate.getSeconds())
}


/*
Create a function to validate a date entered as string
*/
var validateDate = function (myDateString)
{
    var validator = new RegExp(/^[0-9]{4}-(0[0-9]{1}|1[0-2]{1})-(0[0-9]{1}|1[0-9]{1}|2[0-9]{1}|3[0-1]{1})$/);
    return (validator.test(myDateString));
}
