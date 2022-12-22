const fs = require("fs")
const DataClass = require('./Data.js');
var obj=new DataClass();

const filename = process.argv[2]
var sum=0;
var actualAmount=0;
var discount=0;
var amountToPay=0;

//required methods
function mtax(amt)
{
  per=10
  return (amt/100)*per;
}
function mdiscount(amt, per)
{
  return (amt/100)*per;
}
function mamount(amt, per)
{
  return amt-(amt/100)*per;
}

fs.readFile(filename, "utf8", (err, data) => {
    var inputLines = data.toString().split("\n")
    inputLines.forEach(input => {
        var output = "" 
        output+=input;
        const result = output.trim().split(/\s+/);
        // console.log(result)
        if(output=="PRINT_BILL") {
            // console.log("PRINTING BILL")
            actualAmount=sum
            if(actualAmount>1000) {
                discount=mdiscount(obj.pptshirt,obj.tshirt)*obj.getvalue1()
                +mdiscount(obj.ppjacket,obj.jacket)*obj.getvalue2()
                +mdiscount(obj.ppcap,obj.cap)*obj.getvalue3()
                +mdiscount(obj.ppnotebook,obj.notebook)*obj.getvalue4()
                +mdiscount(obj.pppens,obj.pens)*obj.getvalue5()
                +mdiscount(obj.ppmarkers,obj.markers)*obj.getvalue6()

                console.log("TOTAL_DISCOUNT "+discount)
                amountToPay=mamount(obj.pptshirt,obj.tshirt)*obj.getvalue1()
                +mamount(obj.ppjacket,obj.jacket)*obj.getvalue2()
                +mamount(obj.ppcap,obj.cap)*obj.getvalue3()
                +mamount(obj.ppnotebook,obj.notebook)*obj.getvalue4()
                +mamount(obj.pppens,obj.pens)*obj.getvalue5()
                +mamount(obj.ppmarkers,obj.markers)*obj.getvalue6()

                var tax=mtax(amountToPay)
                amountToPay+=tax;
                console.log("TOTAL_AMOUNT_TO_PAY "+amountToPay)
            } else {
                discount=0
                amountToPay=sum
                var tax=mtax(amountToPay)
                amountToPay+=tax;
                console.log("TOTAL_DISCOUNT "+discount)
                console.log("TOTAL_AMOUNT_TO_PAY "+amountToPay)
            }
        } else if(result[0]=="ADD_ITEM") {
            if(result[1]=="CAP") {
                if(result[2]>2) {
                    console.log("ERROR_QUANTITY_EXCEEDED")
                } else {
                    sum+=500*result[2];
                    obj.setvalue3(result[2])
                    console.log("ITEM_ADDED")
                }
            }
            if(result[1]=="JACKET") {
                if(result[2]>2) {
                    console.log("ERROR_QUANTITY_EXCEEDED")
                }else {
                    sum+=2000*result[2]
                    obj.setvalue2(result[2])
                    console.log("ITEM_ADDED")
                }
            }
            if(result[1]=="TSHIRT") {
                if(result[2]>2) {
                    console.log("ERROR_QUANTITY_EXCEEDED")
                }else {
                    sum+=1000*result[2]
                    obj.setvalue1(result[2])
                    console.log("ITEM_ADDED")
                }
            }
            if(result[1]=="NOTEBOOK") {
                if(result[2]>3) {
                    console.log("ERROR_QUANTITY_EXCEEDED")
                }else {
                    sum+=200*result[2]
                    obj.setvalue4(result[2])
                    console.log("ITEM_ADDED")
                }
            }
            if(result[1]=="PENS") {
                if(result[2]>3) {
                    console.log("ERROR_QUANTITY_EXCEEDED")
                }else {
                    sum+=300*result[2]
                    obj.setvalue5(result[2])
                    console.log("ITEM_ADDED")
                }
            }
            if(result[1]=="MARKERS") {
                if(result[2]>3) {
                    console.log("ERROR_QUANTITY_EXCEEDED")
                }else {
                    sum+=500*result[2]
                    obj.setvalue6(result[2])
                    console.log("ITEM_ADDED")
                }
            }  
        } else {
            console.log(output)
        }
    });   
})
 