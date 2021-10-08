// TIp Calculator function to calculate the total tip and tip per person 
//input: bill, tippPercentage and numOfPeople
//Output: tipAmount, totalPerPerson
// Questions:
// how to we spread hill of 30 amongst 15 people?
// how do I access the users input? 
// how to catch if the user entered the wrong input?
// how do you determine which tip selected? 
// how do you calculate the tip amount per person?
// how to calculate the total per person?


// Variables to us:
// Tip splitter function


// Tip buttons and evenlistener

let buttons = document.querySelectorAll(".tip-item")

buttons.forEach(button => {
    button.addEventListener("click", function(){
        var tipPercentage = button.dataset.num
        button.style.backgroundColor = "rgb(146 223 213)"
        button.style.color = "#00494d;"
       
        tipSplitter(tipPercentage)        //console.log(tipPercentage)
    })
})


// Bill input and evenlistener

// const billInput = document.getElementById("bill")

// billInput.addEventListener("keyup", function(bill){
//     var bill = billInput.value 
//     tipSplitter(bill)  
// })

// Number of people and Even listener

// const peopleInput = document.getElementById("nop")

// peopleInput.addEventListener("keyup", function(numOfPeople){
//     var numOfPeople = peopleInput.value
//     tipSplitter(numOfPeople) 

// })



const tipSplitter = (tipPercentage) => {
    // calc tip amount per person
   
    bill = Number(document.getElementById("bill").value)
    numOfPeople = Number(document.getElementById("nop").value)
    tipPercentage = parseFloat(tipPercentage)
    if (numOfPeople !== 0 || ''){
  
    var tipAmmount = ( bill / 100 ) * tipPercentage
   var totalTip = tipAmmount + bill
    // calc total per person
   var totalPerPerson = totalTip / numOfPeople

    console.log(bill,tipPercentage,numOfPeople)
   console.log(totalPerPerson,totalTip)
  
   document.getElementById("totaltip").innerText = tipAmmount.toFixed(2)
   document.getElementById("totalperson").innerText = totalPerPerson.toFixed(2)
   
    }
   };


// Reset Button 

const resetbtn = document.querySelector(".reset-button")

resetbtn.addEventListener("click", function(){
    document.getElementById("bill").value = "";
    document.getElementById("nop").value = "";
   // document.getElementById("custom").value = "";
    window.location.reload();
})
   
   