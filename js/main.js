let balance = 0;
let name = prompt('Enter your name') ;
let totalBalance = document.getElementById('balance');
let _username = document.getElementById('username');
    _username.innerHTML = name;

let completeTransaction = function() {

  let _amount = parseInt(document.getElementById('amount').value);

  balance += _amount;
  document.getElementById('history').innerHTML += `<li>You deposited ${_amount}.</li>`;
  document.getElementById('balance').innerHTML = balance;

        if (balance < 0)
          {
            totalBalance.classList.remove('greenBalance');
            totalBalance.classList.add('redBalance');
          }
        else {
          totalBalance.classList.add('greenBalance');
            }
          
};

document.getElementById('process').addEventListener('click', completeTransaction)
