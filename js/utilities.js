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