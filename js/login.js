// step -1: set event handler addEvent listener 
document.getElementById('btn-login')
.addEventListener('click',function(event){
//  step- 3: get the phone number 
const phoneNumber = document.getElementById('phone-number').value;
const pinNumber = document.getElementById('pin-number').value;
console.log(phoneNumber,pinNumber);

//Step - 4: temporary pohne and pin check 
if(phoneNumber=== '01300294544' && pinNumber === '1234'){
  console.log("You are Logged in");
  window.location.href = '/home.html'
  // step -5 : allow user to use the website 
}
else{
  console.log("Wrong phone number or Pin")
  alert('Enter Valid Phone or Pin Number')
}
})
