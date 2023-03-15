//Write a typescript which contains one functionnamed as bibonaci.That function accept one number from user and 
//print fibonaci series till that number

function Fibonacii(iNo :number):void
{
    var f:number=0;
    var S:number=1;
    var next:number =0;
    var Cnt :number =0;
    for(Cnt =0;Cnt<iNo;Cnt++)
    {
        if(Cnt<=1)
        {
            next = Cnt;
        }
        else{
            next =f+S;
            f=S;
            S= next;
        }
        if(next > iNo)
        {
         break;
        }
        console.log(next);
    }

}
var Value:number = 21;

Fibonacii(Value);