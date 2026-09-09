// add to event listener on add money button 

document.getElementById('btn-addMoney').addEventListener('click',function(event){
  event.preventDefault();
  // get the addMoney and pinNumber value 
  const addMoney = document.getElementById('amount').value;
  const addMoneyNumber = parseFloat(addMoney);
  const pinNumber = document.getElementById('pin-number').value;
  // console.log(addMoney,pinNumber);

  // now verify the pin number with silly way 🤣
  
if(pinNumber === '1234'){
  // added new balance on currentBalance 
  const currentBalance = document.getElementById('balance').innerText;
  const BalanceNumber = parseFloat(currentBalance.replace('$',''));
  const newBalance =  BalanceNumber + addMoneyNumber ;
  console.log(newBalance);
  console.log('Money added Succesfully')

  // added new balance on the UI 
  document.getElementById('balance').innerText = '$' + newBalance;
}
else{
  alert('Failed to added money. Please try again.')
}
})