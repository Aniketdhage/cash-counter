
const btn = document.getElementById('btn');
const textFeild = document.getElementById('input');
textFeild.focus();

btn.addEventListener('click', () =>{
    
    if(textFeild.value){
        const parent = document.getElementById('box');
        const newElement = document.createElement('input');
        
        newElement.setAttribute("placeholder","Enter Paid Amount")
        
        newElement.classList.add('input');
        
        parent.appendChild(newElement).focus();
        
        const newButton = document.createElement('button');
        newButton.innerHTML = 'PRESS';
        newButton.classList.add('button');
        parent.appendChild(newButton);
         const oldEleParent = document.getElementById('main');
         
         const firstInputFeild = document.getElementById('input');
         
         const firstButtonParent = document.getElementById('span');
     
         oldEleParent.removeChild(firstButtonParent);
        
         oldEleParent.removeChild(firstInputFeild);
      

        newButton.addEventListener('click',() => {
            if(newElement.value){
           
            
            parent.removeChild(newElement);
            parent.removeChild(newButton);
            
            let MoneyReturn = +newElement.value - +textFeild.value;
            const ReturnMoney = document.createElement('div');
            if(MoneyReturn >= 0){
                ReturnMoney.innerHTML =` Sucessful : ${MoneyReturn}Rs, Need to Return`;
                ReturnMoney.classList.add('return');


                let changeDistribution = document.getElementById('change');
                let Title = document.createElement('div');
                Title.innerHTML = " CHANGE DISTRIBUTION"
                changeDistribution.classList.add('title')
                changeDistribution.appendChild(Title);
                let distribution = document.createElement('div');
    
                let change = [2000,500,200,100,20,10,5,2,1];
                let remainder =MoneyReturn;
                let quotient = 0 ;
                 for(let i=0;i<change.length;i++){
                    quotient =   remainder / change[i];
                    remainder = remainder%change[i];
                    if(Math.floor(quotient) != 0 ){
                    distribution.innerHTML += `${change[i]}Rs - ${Math.floor(quotient)} ,`;
                    distribution.classList.add('dist');
                    changeDistribution.appendChild(distribution);
                    }
                 }

            }else{
                ReturnMoney.innerHTML = " Failed : Paid amount cannot Be Less than Bill amount";
                ReturnMoney.classList.add('Invalid');
            }
            parent.appendChild(ReturnMoney);

            
           
               
            
            }else{
                alert('enter a value first');
            }
        });
    
    }else{
        alert('enter a value first')
    }
});







