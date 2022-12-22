//
var no=2
function tax(amt, per=10)
{
  return (amt/100)*per;
}
function discount(amt, per)
{
  return (amt/100)*per;
}
function amount(amt, per)
{
  return amt-(amt/100)*per;
}
console.log(discount(1000, 10)*no)
console.log(amount(1000, 10)*no);
console.log(tax(1000, 10));