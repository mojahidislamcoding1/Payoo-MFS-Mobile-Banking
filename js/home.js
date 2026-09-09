// step -1 : add an event handler to the add money button inside the fildset 
document.getElementById('btn-addMoney').addEventListener('click',function(event){
  //prevent event 
  event.preventDefault();

//  step -2 : get money to be added to the account 
const addMoneyInput = document.getElementById('amount').value;
console.log(addMoneyInput);

//get the pin number 
const PinNumber = document.getElementById('pin-number').value;
console.log(PinNumber);

// step -3 : verify pin number 
if(PinNumber === '1234'){
  console.log("Adding money to your account");

  // step- 4 : get the current balance 
  const currentBalance = document.getElementById('balance').innerText;
  console.log( currentBalance);

  // step -5 : add addMoneyInput with blance 
  const addMoneyNumber = parseFloat(addMoneyInput);
  const balanceNumber = parseFloat(currentBalance.replace('$',''));
  const newBalance = addMoneyNumber + balanceNumber;
  console.log(newBalance);

  // step -6 : added new balance in the UI 
  document.getElementById('balance').innerText = '$' + newBalance;
}
else{
  alert('Please try again')
  console.log("Failed to added money !")
}
})