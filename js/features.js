// show cash out form and hide the add money form 
document.getElementById('btn-show-cashOut').addEventListener('click',function(){

  // show cash out form 
  document.getElementById('cash-out-form').classList.remove('hidden');
  
  // hide the cash out form 
  document.getElementById('add-money-form').classList.add('hidden');
});


// show add money form and hide the cash out form 
document.getElementById('btn-show-addMoney').addEventListener('click',function(){
  // show add money form 
  document.getElementById('add-money-form').classList.remove('hidden');
  // hide add money button  
  document.getElementById('cash-out-form').classList.add('hidden')
})