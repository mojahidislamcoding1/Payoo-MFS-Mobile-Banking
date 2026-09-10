// Create a  reusable function to getInputValueById 

function getInputValueById (id){
  const inputValue = document.getElementById(id).value;
  const inputValueNumber = parseFloat(inputValue);
  return inputValueNumber;
}

// create a reusable fucntion to get innerText value 

function getInnerTextById (id){
  const innerText = document.getElementById(id).innerText;
  const innerTextNumber = parseFloat(innerText.replace('$',''));
  return innerTextNumber;
}

//create a reusable function to features option 

function showFeatures (id){
  // hide all features 
  document.getElementById('add-money-form').classList.add('hidden');
  document.getElementById('cash-out-form').classList.add('hidden');
  document.getElementById('transaction-section').classList.add('hidden');
  document.getElementById('transferMoney-form').classList.add('hidden');
  document.getElementById('GetBonus-form').classList.add('hidden');
  document.getElementById('PayBill-form').classList.add('hidden');

  // show provided features by id 

  document.getElementById(id).classList.remove('hidden');

}