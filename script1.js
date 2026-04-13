
const obj=
{
    id:1,name:"rakesh",
    myData: [10,"hello","bye bye"]
}
console.log(obj.loc);
obj.loc="hyd"
console.log(obj);

const user= [
    {
        id : 1, name : "rakesh", loc : "hyd"
    },
    {
        id:2,name:"bhai",loc:"hyd"
    }
]
//console.log(user);
console.log(user[1]);

function myFun(a,b)
{
    console.log(a+b);
    
}
console.log(myFun);
console.log(myFun(10,30));


var a=20,b=30
console.log(a+b)
const myfun = function(num1,num2)
{
    return num1+num2
}
console.log(myfun(34,32));

function add(num5,num4)
    {
     //console.log(num5-num4);
     return num5-num4
    }
   // console.log(add);
    console.log(add(36,2));

    //caluculater
    domath(num1,num2,operator)
    
        let result;
        switch(operator)
        {
          case '+':
            return num1+num2
            console.log(`the addition of`+num1+`&`+num2+'+');
        }
    
