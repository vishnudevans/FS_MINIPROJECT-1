const correctAnswer = ['A', 'B', 'A', 'A', 'A'];

const form  = document.querySelector('form');
const result  = document.querySelector('.result');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    let score = 0;
    const userAnswer = [form.q1.value, form.q2.value, form.q3.value, form.q4.value, form.q5.value];

    userAnswer.forEach((answer, index) => {
        if(answer === correctAnswer[index]){
            score += 20;
        }
    });

    scrollTo(0,0);
   
    let output = 0;
    const timer = setInterval(() => {
        result.querySelector('span').textContent = `${output}%`;
        if (output === score) {
            clearTimeout(timer);
        } else {
            output++;
        }
    }, 10) 
    result.classList.remove('d-none');
});