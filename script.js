let btn = document.getElementById('btn-submit')
btn.addEventListener('click', function(){
    let weight = document.getElementById('weight').value
    let height = document.getElementById('height').value
    let result  = weight/(height/100*height/100)

    if(weight > 0 && weight > 0){
        if (result < 18.5) {
            bmi = 'Underweight'
        }else if(result >= 18.5 && result <= 24.9){
            bmi = 'Normal Weight'
        }else if(result >= 25 && result <= 29.9){
            bmi = 'Overweight'
        }else if(result >= 30){
           bmi = 'Obesity'
        }
        document.getElementById('result').innerHTML = 'Your BMI is ' + result.toFixed(1) + ' which means You are ' + bmi
    }else{
        alert('Harap masukkan angka')
    }
})