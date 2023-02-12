document.getElementById('btn-deposit').addEventListener('click', function(){
 const depositField = document.getElementById('Deposit-amount');
 const newDepositAmountString = depositField.value;
 const newDepositAmount =parseFloat(newDepositAmountString);
 console.log(newDepositAmount); 

 const depositTotalElement =document.getElementById('deposit-total');
 const previousDepositTotalString = depositTotalElement.innerText;
 const previousDepositTotal = parseFloat(previousDepositTotalString);


 const currentDepositTotal = newDepositAmount +previousDepositTotal;
 depositTotalElement.innerText = currentDepositTotal;


 const balanceTotalELement = document.getElementById('balance-total');
  const previousBalanceTotalString = balanceTotalELement.innerText;
  const previousBalanceTotal = parseFloat(previousBalanceTotalString);


  const currentBalanceTotal= previousBalanceTotal + newDepositAmount;
  balanceTotalELement.innerText= currentBalanceTotal;







 depositField.value ='';
})