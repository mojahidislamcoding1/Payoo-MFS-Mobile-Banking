document.getElementById('btn-getBonus').addEventListener('click',function(event){
  event.preventDefault();

  const getBonus = document.getElementById('Bonus-Cupon').value;
  // console.log(getBonus);
  if(getBonus === 'MOJAHID26'){
    const mainBalance = getInnerTextById('balance');
    const newBalance = mainBalance + 100;
    document.getElementById('balance').innerText = '$' + newBalance;
    // console.log('Congratulation You Got a Bonus cupon by win 100 tk');
    alert('Congratulation you got a Bonus Cupon by win 100 tk.');

       // add transaction history 
    const currentDate = new Date ();
    const div = document.createElement('div');
    div.classList.add('bg-red-200');
    div.innerHTML = `
      <h4 class=" text-3xl font-bold ">Get Bonus </h4>
      <p> Get Bonus 100 Tk. New Balance ${newBalance} <br> ${currentDate} </p>
    `
    document.getElementById('transaction-container').appendChild(div);
  }
  else{
    alert('Please Enter Right Bonus Cupon')
  }
})