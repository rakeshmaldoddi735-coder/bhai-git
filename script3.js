
var a=2
var b=3
console.log(a+b);
function let(n,m,operator)
{
    let result;
    switch(operator)
    {
        case '+':
            result=n+m;
            break;
            case '-':
                result=n-m;
                break;
                case '*':
                    result=n*m;
                    break;
                    case '%':
                        result=n%m;
                        break;
                        case '/':
                            result=n/m;
                            break;
    }
    return result;;
}
console.log(let(5,7,'+'));