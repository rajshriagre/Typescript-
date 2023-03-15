//Write a typescript program which contains one function named as maximum .That function accept three parameters and it should 
//returns largest value from three input parameter
//Input: 23  89  6
//Output: Maximum number is 89


function Maximum(iNo1:number,iNo2:number,iNo3:number):number
{
    if((iNo1>=iNo2)&&(iNo1>=iNo3))
    {
        return iNo1;
    }
    else if((iNo2>=iNo1)&&(iNo2>=iNo3))
    {
        return iNo2;
    }
    else((iNo3>=iNo1)&&(iNo3>=iNo2))
    {
        return iNo3;
    }

}
 
var iRet :number = 0;
iRet = Maximum(123,189,96);
console.log("maximum numberis:"+iRet);