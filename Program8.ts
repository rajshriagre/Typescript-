//write a typescript program which contains one function named as Maximum .That function accept array of number
//and return the second largest number from array.
//Input: 23,89,6,29,56,45,77,32
//ouput: second maximum number is : 77

function Maximum(Brr:number[]):number
{
    var i:number =0;
    var j:number =0;
    var temp:number =0;
    for(i =0; i<Brr.length;i++)
    {
        for(j =i+1;j <Brr.length;j++)
        {
            if(Brr[i]<Brr[j])
            {
            temp = Brr[i];
            Brr[i]=Brr[j];
            Brr[j]=temp;
            }
        }
    }
    return Brr[1];
}

var Value :number[] =[23,89,6,29,56,45,85,32];
var iRet :number = 0;
iRet =Maximum(Value);
console.log("second maximum no is:"+iRet);
