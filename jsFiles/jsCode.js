const xCash = document.getElementById('givenBill');
const xxcash = document.getElementById('billPaidd');
const buttonCount = document.getElementById('btn');
const resultShow = document.getElementById('resultShow');
const errorMessage = document.getElementById('error-message');
const successContainer = document.getElementById('success-container');
const successMessage = document.getElementById('success-message');
 
const CounterConatainer = document.getElementById('Counter');

const money = [1,5,10,20,50,100,200,500,2000];

let cashCount = [];

const calculateChange = function (total) {
  for (let i = 0; i < money.length; i++) {
    cashCount.push(Math.trunc(total / money[i]));
    total = total % money[i];
  }
};
const display = function (){
  let list = document.createElement('ul');
  list.classList = 'counter';
  resultShow.appendChild(list);
  cashCount.forEach(function(denomination,index){
    let li = document.createElement('li');
    li.classList= 'list-item';
    list.appendChild(li);
    li.innerHTML += '<p class ="counter-value"> Rs ${counter}</p> <p class ="counter-count"> Rs ${cashCount[index]}</p>';
  });
  };

  const showErrorMessage = function (message) {
    errorMessage.style.display = 'block';
    errorMessage.textContent = message;
  };
  
  const showSuccess = function (message) {
    successContainer.style.display = 'block';
    successMessage.textContent = message;
  };

  function cashFormed(){
    let billGiven = +xCash.value;
    // console.log(billGiven);
    let billMoney = 2000;
    console.log(billMoney);
    let total = billMoney-billGiven;
    if (billGiven> 0 && billMoney>0){
      if(total>=0){
        showSuccess('your shopping total is Rs ${total}')
      }
    } else {
      showErrorMessage('please enter valid money');
    }
  }

  buttonCount.addEventListener('click',cashFormed);