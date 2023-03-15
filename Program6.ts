//Write a typescript program which contains one function named as Maximu.
//THat function accept array of number and return the largest number from array.
//Input:23  89  6  29  56  45  77  32
//Output: Maximum number is 89

function Maximum(Arr:number[]):number
{
    let LargestNo:number = 0;
    LargestNo= Arr[0];
    let Cnt :number =0;
    
    for(Cnt =0; Cnt<Arr.length;Cnt++)
    {
        if(LargestNo <= Arr[Cnt])
        {
            LargestNo = Arr[Cnt];
        }
    }
    return LargestNo;
}

var StudentNo :number[] =[23,89,6,29,56,45,77,132];
var iRet :number =0;

iRet = Maximum(StudentNo);
console.log("Maximum number is:"+iRet);