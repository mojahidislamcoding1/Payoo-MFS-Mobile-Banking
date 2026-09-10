// // add event listener on the cash out button 
// document.getElementById('btn-cashOut').addEventListener('click',function(event){
//   event.preventDefault();

//   // get cashOut amount and pin number 
//   const cashOutMoney = document.getElementById('cash-out-amount').value;
//   const cashOutMoneyNumber = parseFloat(cashOutMoney);
//   const pinNumber = document.getElementById('cash-out-pin').value;
//   // console.log(cashOutMoney, pinNumber);
 
//   // now check pin number 
//   if(pinNumber === '1234'){
//        // now we check enough  balance , that you want to cashOut 
    
//          // cash out money now 
//     const mainBalance = document.getElementById('balance').innerText;
//     const mainBalanceNumber = parseFloat(mainBalance.replace('$',''));
//     const newBalance = mainBalanceNumber - cashOutMoneyNumber;
//     console.log(newBalance);
//     console.log('Cash Out Succesfull')

//     document.getElementById('balance').innerText = '$' + newBalance;
//   }
//   else{
//     alert('Failed to Cash Out Money. Please try again.')
//   }
// })


//** Now we write the correct way to write code On the external file utilites.js reusable function use kore code korbo */

document.getElementById('btn-cashOut').addEventListener('click',function(event){
  event.preventDefault();
  const cashOutMoney = getInputValueById('cash-out-amount');
  const pinNumber = getInputValueById('cash-out-pin');
  // validation input 
  if(isNaN(cashOutMoney)){
    alert('Please Enter Valid Amount')
    return;
  }

  if(pinNumber === 1234){
    const mainBalance = getInnerTextById('balance');
    if(cashOutMoney > mainBalance){
      alert('Insificent Fund')
      return;
    }
    const newBalance = mainBalance - cashOutMoney;
    // console.log(newBalance);
    document.getElementById('balance').innerText = '$' + newBalance;

    // added to transaction history  (This is the Dynamic way to add transaction history)
    const div = document.createElement('div');
    div.classList.add('bg-yellow-300');
    div.innerHTML = `
      <h4 class="text-3xl font-bold">Cash Out </h4>
      <p>${cashOutMoney} Withdraw. New Balance: ${newBalance}</p>
    `
    document.getElementById('transaction-container').appendChild(div);
    // console.log(div);
    
  }
  else {
    alert('Failed to Cash Out')
  }
})