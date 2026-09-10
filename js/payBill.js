document.getElementById('btn-PayBill')
.addEventListener('click',function(event){
  event.preventDefault();

  const Number = getInputValueById('Account-Number');
  const PayBillMoney = getInputValueById('PayBill-amount');
  const pinNumber = getInputValueById('payBill-pin');
  const selectedBill = document.getElementById('bill-type').value;

  if(selectedBill === ''){
    alert('Please select a Bill type !');
   
  }

  // console.log(Number,transferMoney,pinNumber);
  // if(isNaN(Number && PayBillMoney)){
  //   alert('Please Enter a Valid Number & Valid Amount');
    
  // }
  if(pinNumber === 1234){
    const mainBalance = getInnerTextById('balance');
    if(PayBillMoney > mainBalance){
      alert('Insificent Fund . Please try again.')
    }
    const newBalance = mainBalance - PayBillMoney;
    // console.log(newBalance);
    document.getElementById('balance').innerText = '$' + newBalance;

    // add transaction history 
    const currentDate = new Date ();
    const div = document.createElement('div');
    div.classList.add('bg-green-200');
    div.innerHTML = `
      <h4 class=" text-3xl font-bold ">Pay Bill </h4>
      <p> Pay Bill ${PayBillMoney} Tk. New Balance ${newBalance} <br> ${currentDate} </p>
    `
    document.getElementById('transaction-container').appendChild(div);
  }
  else{
    alert('Failed to Transfer Money. Please try again.')
  }
})