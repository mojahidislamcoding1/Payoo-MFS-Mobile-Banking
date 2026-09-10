// // add to event listener on add money button 
// document.getElementById('btn-addMoney').addEventListener('click',function(event){
//   event.preventDefault();
//   // get the addMoney and pinNumber value 
//   const addMoney = document.getElementById('amount').value;
//   const addMoneyNumber = parseFloat(addMoney);
//   const pinNumber = document.getElementById('pin-number').value;
//   // console.log(addMoney,pinNumber);

//   // now verify the pin number with silly way 🤣
  
// if(pinNumber === '1234'){
//   // added new balance on currentBalance 
//   const currentBalance = document.getElementById('balance').innerText;
//   const BalanceNumber = parseFloat(currentBalance.replace('$',''));
//   const newBalance =  BalanceNumber + addMoneyNumber ;
//   console.log(newBalance);
//   console.log('Money added Succesfully')

//   // added new balance on the UI 
//   document.getElementById('balance').innerText = '$' + newBalance;
// }
// else{
//   alert('Failed to added money. Please try again.')
// }
// })

/** 
  This code is used to a common function . That is profetional way to Write code. DRY
 */
document.getElementById('btn-addMoney')
.addEventListener('click',function(event){
  event.preventDefault();
  const addMoney = getInputValueById('amount');
  const pinNumber = getInputValueById('pin-number');
  
  // validation input 
  if(isNaN(addMoney)){
    alert('Please Enter Valid Amount')
    return;
  }
  if(pinNumber === 1234){
    const mainBalance = getInnerTextById('balance');
    const newBalance = mainBalance + addMoney;
    // console.log(newBalance)
    document.getElementById('balance').innerText = '$'+ newBalance;

    // added to transaction history  ( it was a silly way to add transaction)
    const p = document.createElement('p');
    p.innerText = `Added: ${addMoney} Tk. New Balance : ${newBalance}`;

    // should be a common fucntion 
    document.getElementById('transaction-container').appendChild(p)
  }
  else{
    alert('Failed to add Money . Please try again');

  }
})