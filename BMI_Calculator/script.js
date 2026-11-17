const form=document.querySelector('form')

form.addEventListener('submit', function(e){
    e.preventDefault()

    const height=parseInt(document.querySelector('#height').value)
    const weight=parseInt(document.querySelector('#weight').value)
    const result=document.querySelector('#result')

    if(height==='' || height<0 || isNaN(height)){
       result.innerHTML=`Please give valid height ${height}`;
    }
    else if(weight==='' || weight<0 || isNaN(weight)){
        result.innerHTML=`Please give valid weight ${weight}`
    }
    else{
       const BMI=(weight / ((height*height)/10000)).toFixed(2)
       // to show result
       result.innerHTML=`<span>${BMI}</span>`;
       if(BMI<18.6){
           result.innerHTML=`${BMI} So You are Under Weight`;
       }
       else if(BMI>24.9){
                    result.innerHTML=`${BMI}: So You are Over Weight`
       }
       else{
         result.innerHTML=`${BMI} So Your Weight is Perfect`
       }
    }
})