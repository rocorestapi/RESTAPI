<<<<<<< HEAD
=======
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

var calculateAll = function()
{
//    console.log("MAX:", maxTest(arguments, 0));
//    console.log("MIN:", minTest());
      console.log("AVG:", avgTest(arguments, 0));
//    console.log("TOTAL:", sumTest(arguments, 0));
//    console.log("TOTAL:", sumTest2(arguments));
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
        return (numbers[pos])/(numbers.length);
    }
    return (numbers[pos])/(numbers.length) + sumTest(numbers, pos + 1);
}

// Contar palabras
var countWords = function (paragraph) {
    return (paragraph.split(' ')).length;
}


// Print DATE today and time
// Contar palabras
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


// create a function to validate a date
var validateDate = function (myDateString) {
//    var validator = new RegExp(/^[0-9]{4}$/);
    var validator = new RegExp(/^[0-9]{4}-(0[0-9]{1}|1[0-2]{1})-(0[0-9]{1}|1[0-9]{1}|2[0-9]{1}|3[0-1]{1})$/);
    return (validator.test(myDateString));
}


var checkCapicua = function(var1)
{
    var numero1 = var1;
    console.log("numero1 = "+numero1);
    var cadena1 = numero1.toString();
    console.log("cadena1 = "+cadena1);
    var arreglo1 = cadena1.split('');
    console.log("arreglo1 = "+arreglo1);
    var invertido2 = arreglo1.reverse();
    console.log("invertido2 = "+invertido2);
    var arreglo2 = invertido2.join('');
    console.log("arreglo2 = "+arreglo2);
    var numero2 = Number(arreglo2);
    console.log("numero2 = "+numero2);
    if (numero1 == numero2)
        console.log(true)
    else
        console.log(false)
    /*
        //var indice =0;
        for (var indice = 21; indice <= 100; indice++)
        {
            if (capicua(indice, 0))
                console.log(indice);
        }*/
}
var capicua = function(numero, pos) {
    var cadena = numero.toString();
    console.log("ENTRANDO = "+cadena.length);
    console.log("pos y valor = "+cadena[pos]);

/*
    if (cadena.length >= 2)
    {
        console.log("ENTRANDO IF");
        if (cadena[pos] == cadena[cadena.length - 1 - pos]) {
            console.log("valor = "+cadena[pos]+" y "+ cadena[cadena.length - 1 - pos]);
            return capicua(numero, pos + 1);
        }
        else
            return false;
    }
    else
        return false;
*/
}


/*
* Get N numvers, N=5 => 1,3,5,7,9
*/
var getFirstEvenNumber = function(n)
{
    var i = 1;
    var aux = 0;
    while(aux != n)
    {
        if (isEven(i))
        {
            console.log(i);
            aux++;
            }
        i++;
    }
}

var getFirstOddNumber = function(n)
{
    var i = 1;
    var aux = 0;
    while(aux != n)
    {
        if (!isEven(i))
        {
            console.log(i);
            aux++;
        }
        i++;
    }
}

/**
 *
 * @param n
 * @returns {boolean}
 */
var isEven = function(n)
{
    return (n % 2 == 0);
}

/**
 *
 * @param n
 * @returns {number}
 */
var getFact = function(n)
{
    var factorial = 1;
    if(factorial <=0)
        return factorial;
    for (var i=2; i<=n; i++)
        factorial = factorial * i;
    return factorial;
}

/**
 *
 * @param cadena
 * @param n
 * @returns {*}
 */
var truncate = function(cadena, n)
{
    var truncate_res = "";
    if(n <= cadena.length) {
        for (var i = 0; i < n; i++) {
            truncate_res = truncate_res + cadena[i];
        }
        return truncate_res;
    }
    return null;
}

/**
 * FUNC ANONIMA
 * @param cadena
 * @param n
 * @returns {*}
 */
    /*
(function(cadena, n)
{
    var truncate_res = "";
    if(n <= cadena.length) {
        for (var i = 0; i < n; i++) {
            truncate_res = truncate_res + cadena[i];
        }
        return truncate_res;
    }
    return null;
})("ho laaaaaaaaaa", 5);
*/

/**
 *
 */
    /*
var f = function()
{
    console.log("callback");
}
var doOperation = function(a, b, f)
{
    console.log(a,b, f());
}

*/

/*
(function(name)
{
    console.log("Hello AN "+name);

}
)("ronald 1");
*/
/**
 *
 */
var operator = function()
{
    console.log("xxxxxxxxxxxxx");
    return (function ()
    {
        console.log(" YYYYYYYY ");
        return 1;
    })();
};

/**
 * Creating class
 */
var Persona = function(name, age)
{
    this.name = name;
    this.age = age;
    this.eat = function(){console.log(this.name +" is ranching");};
};

var ronald1 = new Persona("Ronald 1", 10);
var ronald2 = new Persona("Ronald 2", 15);


>>>>>>> js_basics
