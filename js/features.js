// // show cash out form and hide the add money form 
// document.getElementById('btn-show-cashOut').addEventListener('click',function(){

//   // show cash out form 
//   document.getElementById('cash-out-form').classList.remove('hidden');
  
//   // hide the cash out form 
//   document.getElementById('add-money-form').classList.add('hidden');
// });


// // show add money form and hide the cash out form 
// document.getElementById('btn-show-addMoney').addEventListener('click',function(){
//   // show add money form 
//   document.getElementById('add-money-form').classList.remove('hidden');
//   // hide add money button  
//   document.getElementById('cash-out-form').classList.add('hidden')
// })


// Now we write the correct way to writeen function  we use a reusable function  

// show add money features 
document.getElementById('btn-show-addMoney')
.addEventListener('click',function(){
  showFeatures('add-money-form');
});

// show cash out features 
document.getElementById('btn-show-cashOut')
.addEventListener('click',function(){
  showFeatures('cash-out-form');
})

// show transaction features 
document.getElementById('btn-show-transaction')
.addEventListener('click',function(){
  showFeatures('transaction-section');
})

//show transfer money features 
document.getElementById('btn-show-transferMoney')
.addEventListener('click',function(){
  showFeatures('transferMoney-form');
  
})

//show Get Bonus features
document.getElementById('btn-show-bonus')
.addEventListener('click',function(){
  showFeatures('GetBonus-form');
})

// show PayBill features 
document.getElementById('btn-show-payBill')
.addEventListener('click',function(){
  showFeatures('PayBill-form');
})
