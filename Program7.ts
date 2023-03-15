//Write a typescript program which contains one function named as Summation.
//THat function accept array of number and return the summation of number from array.
//Input: 23  6  7  4  5  7
//Output: Maximum number is : 52

function Summation(Arr:number[]):number
{
    let TotalSum:number = 0;
    let Cnt :number =0;
    
    for(Cnt =0; Cnt<Arr.length;Cnt++)
    {
            TotalSum = Arr[Cnt]+TotalSum;
    }
    return TotalSum;
}

var StudentNo :number[] =[23,6,7,4,5,7];
var iRet :number =0;

iRet = Summation(StudentNo);
console.log("Addition is:"+iRet);