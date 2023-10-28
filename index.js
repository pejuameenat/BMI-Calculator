const submitBtn = document.querySelector('.submit-btn');
let bmiResult = document.querySelector('.bmi-result');
let comment = document.querySelector('.comment');
const heightInput = document.querySelector('.height');
const weightInput = document.querySelector('.weight');
const reset = document.querySelector('.reset');

function commentMsg(message){
  comment.textContent = message;
}
function bmiCalculator(height, weight){
    height = Number(heightInput.value)
    weight = Number(weightInput.value)
    const totalBmi = weight / height ** 2
    bmiResult.textContent = Math.floor(totalBmi);
    if(!height && !weight){
       commentMsg( `Input cannot be empty!`)
       comment.style.color = '#f00'
       bmiResult.textContent = ""
    }
     else if(totalBmi <=24.9){
        commentMsg(`Comment: You are healthy 🦾`)
     }
    else if (totalBmi >=30){
      commentMsg(`Comment: You are obese ‼⚠‼, get ready to be admitted 🛏`)
       
    }else{
      commentMsg(`Comment: You are overweight, you need to eat healthy and exercise`) 
    }

  return bmiResult.textContent, commentMsg; 
}

submitBtn.addEventListener('click', bmiCalculator);
reset.addEventListener('click', function(){
    window.location.reload();
})