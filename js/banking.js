//Handle Deposit BTN
document.getElementById('deposit-btn').addEventListener('click', function() {
    const depositInput = document.getElementById('deposit-amount');
    const depositInputText = depositInput.value;
    const depositInputAmount = parseFloat(depositInputText);

    //Update Deposit
    const depositTotal = document.getElementById('deposit-total');

    const depositTotalText = depositTotal.innerText;
    const depositTotalAmount = parseFloat(depositTotalText);
    
    depositTotal.innerText = depositInputAmount + depositTotalAmount ;

    //Update Balance
    const balanceTotal = document.getElementById('balance-total');
    const balanceText = balanceTotal.innerText;
    const prevBalanceTotalAmount = parseFloat(balanceText);
    balanceTotal.innerText = prevBalanceTotalAmount + depositInputAmount;

// Clear Deposit Input
    depositInput.value = ('');
});

//Handle Withdraw btn
document.getElementById('withdraw-btn').addEventListener('click', function(){
   const withdrawInput = document.getElementById('withdraw-amount');
   const withdraAmountText = withdrawInput.value;
   const withdraAmount = parseFloat(withdraAmountText);
  //Update Withdraw
  const withdrawTotal = document.getElementById('withdraw-total');
  const withdrawTotalText = withdrawTotal.innerText;
  const withdrawTotalAmount = parseFloat(withdrawTotalText);
  withdrawTotal.innerText =  withdrawTotalAmount + withdraAmount;
// Update Balance after Withdrawal
const balanceTotal = document.getElementById('balance-total');
const balanceText = balanceTotal.innerText;
const prevBalanceTotalAmount = parseFloat(balanceText);
balanceTotal.innerText = prevBalanceTotalAmount - withdraAmount;


// Clear Deposit Input
withdrawInput.value= ("");

})
