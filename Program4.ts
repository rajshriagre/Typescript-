//Write a typescript program which contain one function as ChkPrime .That function should accept one number 
//and it should return true if the given number is prime and otherwise return false.

function ChkPrime(iNo :number):boolean
{
    var Cnt :number = 0;
    for(Cnt = 2; Cnt<=(iNo/2);Cnt++)
    {
        if((iNo % Cnt )==0)
        {
            return false;
        }
    }
    return true;

}

var value :number =12;
var Ans :boolean = true;
Ans =ChkPrime(value);

if(Ans == true)
{
console.log("It is a prime number");
}
else
{
    console.log("It is not a prime number");
}


