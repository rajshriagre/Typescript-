//Write a typescript program which contains one function named as Area.That function should calculate area of circle.
//Acpet value of radius from user and return its area .default value of PI should be 3.14 if it not provided by the caller.
//Input: 5
//Output: Area of circle


function Area(Radius:number):number
{
    var TotalArea :number =0;
    var PI :number = 3.14;

    TotalArea= PI * Radius *Radius;

    return TotalArea;
}

var iRet :number =0;
var value:number = 5;

iRet =Area(value);
console.log("Area of circle:"+iRet);
