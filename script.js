var num1 = 10;
for(var i=2;i<=num1;i++)
{
    var fc=0;
    for(var j=1;j<=i;j++)
    {
        if(i%j===0)
        {
           fc++;
        }
    }
     

if(fc===2)
{
    console.log(i);
}
}
