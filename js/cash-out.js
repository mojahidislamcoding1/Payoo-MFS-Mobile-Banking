// add event listener on the cash out button 
document.getElementById('btn-cashOut').addEventListener('click',function(event){
  event.preventDefault();

  // get cashOut amount and pin number 
  const cashOutMoney = document.getElementById('cash-out-amount').value;
  const cashOutMoneyNumber = parseFloat(cashOutMoney);
  const pinNumber = document.getElementById('cash-out-pin').value;
  // console.log(cashOutMoney, pinNumber);
 
  // now check pin number 
  if(pinNumber === '1234'){
       // now we check enough  balance , that you want to cashOut 
    
         // cash out money now 
    const mainBalance = document.getElementById('balance').innerText;
    const mainBalanceNumber = parseFloat(mainBalance.replace('$',''));
    const newBalance = mainBalanceNumber - cashOutMoneyNumber;
    console.log(newBalance);
    console.log('Cash Out Succesfull')

    document.getElementById('balance').innerText = '$' + newBalance;
  }
  else{
    alert('Failed to Cash Out Money. Please try again.')
  }
})