//Write a typescript program which contains one function named as DisplayFactor.That function accept one number
//and display of that factor
//Input: 20
//Output : 1, 2 , 4 , 5, 10


function DisplayFactor(iNo:number):void
{
    var iCnt :number = 0;
    for(iCnt =1;iCnt<=iNo;iCnt++)
    {
        if((iNo % iCnt)==0)
        {
            console.log(iCnt);
        }
    }
}
 
var value :number = 20;
DisplayFactor(value);
