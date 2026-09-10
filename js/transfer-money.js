document.getElementById('btn-transferMoney')
.addEventListener('click',function(event){
  event.preventDefault();

  const Number = getInputValueById('Account-Number');
  const transferMoney = getInputValueById('transferMoney-amount');
  const pinNumber = getInputValueById('transferMoney-pin');

  // console.log(Number,transferMoney,pinNumber);
  if(isNaN(Number && transferMoney)){
    alert('Please Enter a Valid Number')
  }
  if(pinNumber === 1234){
    const mainBalance = getInnerTextById('balance');
    if(transferMoney > mainBalance){
      alert('Insificent Fund . Please try again.')
    }
    const newBalance = mainBalance - transferMoney;
    // console.log(newBalance);
    document.getElementById('balance').innerText = '$' + newBalance;

    // add transaction history 
    const currentDate = new Date ();
    const div = document.createElement('div');
    div.classList.add('bg-gray-200');
    div.innerHTML = `
      <h4 class=" text-3xl font-bold ">Transfer Money </h4>
      <p> Transfer Money ${transferMoney} Tk. New Balance ${newBalance} <br> ${currentDate} </p>
    `
    document.getElementById('transaction-container').appendChild(div);
  }
  else{
    alert('Failed to Transfer Money. Please try again.')
  }
})