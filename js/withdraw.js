document.getElementById('btn-withdraw').addEventListener('click', function(){
    const withdrawField = document.getElementById('Withdraw-amount');
    const withdrawFieldString = withdrawField.value;
    const withdrawFieldAmount = parseFloat(withdrawFieldString);
   


    const withdrawTotalElement =document.getElementById('withdraw-total');
    const previousWithdrawTotalString = withdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);

    const currentWithdrawTotal = withdrawFieldAmount  +previousWithdrawTotal;
    withdrawTotalElement.innerText = currentWithdrawTotal;


    const balanceTotalELement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalELement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);


    const currentBalanceTotal= previousBalanceTotal - withdrawFieldAmount;
  balanceTotalELement.innerText= currentBalanceTotal;





    withdrawField.value ='';
})