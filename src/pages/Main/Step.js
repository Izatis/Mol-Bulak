let step = 1

const titleStep = document.querySelector('#titleStep')
const nextBtn = document.querySelector('#nextBtn')

const form1 = document.querySelector('#form1')
const form2 = document.querySelector('#form2')
const form3 = document.querySelector('#form3')

const stepText1 = document.querySelector('#stepText1')
const stepText2 = document.querySelector('#stepText2')
const stepText3 = document.querySelector('#stepText3')

const stepTextA1 = document.querySelector('#stepTextA1')
const stepTextA2 = document.querySelector('#stepTextA2')
const stepTextA3 = document.querySelector('#stepTextA3')

const stepNumber1 = document.querySelector('#stepNumber1')
const stepNumber2 = document.querySelector('#stepNumber2')
const stepNumber3 = document.querySelector('#stepNumber3')

const stepNumberA1 = document.querySelector('#stepNumberA1')
const stepNumberA2 = document.querySelector('#stepNumberA2')
const stepNumberA3 = document.querySelector('#stepNumberA3')

const firstLine = document.querySelector("#firstLine")
const secondLine = document.querySelector("#secondLine")

const firstLineAdap = document.querySelector("#firstLineAdap")
const secondLineAdap = document.querySelector("#secondLineAdap")

form2.classList.add('display')
form3.classList.add('display')

nextBtn.addEventListener('click', () => {

    if(step < 3){
        step += 1
    }else{
        step = 1
    }

    if(step === 1){
        stepNumber1.classList.add('stepNumber')
        stepText1.classList.add('stepText')

        stepNumber2.classList.remove('stepNumber')
        stepText2.classList.remove('stepText')

        stepNumber3.classList.remove('stepNumber')
        stepText3.classList.remove('stepText')

        stepNumberA1.classList.add('stepNumber')
        stepTextA1.classList.add('stepText')

        stepNumberA2.classList.remove('stepNumber')
        stepTextA2.classList.remove('stepText')

        stepNumberA3.classList.remove('stepNumber')
        stepTextA3.classList.remove('stepText')

        firstLine.classList.remove('green')
        secondLine.classList.remove('green')

        firstLineAdap.classList.remove('green')
        secondLineAdap.classList.remove('green')

        form1.classList.remove('display')
        form2.classList.add('display')
        form3.classList.add('display')
    }

    if(step === 2){
        stepNumber1.classList.add('stepNumber')
        stepText1.classList.add('stepText')

        stepNumber2.classList.add('stepNumber')
        stepText2.classList.add('stepText')

        stepNumber3.classList.remove('stepNumber')
        stepText3.classList.remove('stepText')

        stepNumberA1.classList.add('stepNumber')
        stepTextA1.classList.add('stepText')

        stepNumberA2.classList.add('stepNumber')
        stepTextA2.classList.add('stepText')

        stepNumberA3.classList.remove('stepNumber')
        stepTextA3.classList.remove('stepText')

        form1.classList.add('display')
        form2.classList.remove('display')
        form3.classList.add('display')

        firstLine.classList.add('green')

        firstLineAdap.classList.add('green')

        titleStep.innerHTML = 'Регистрация в личном кабинете'
    }

    if(step === 3){
        stepNumber1.classList.add('stepNumber')
        stepText1.classList.add('stepText')

        stepNumber2.classList.add('stepNumber')
        stepText2.classList.add('stepText')

        stepNumber3.classList.add('stepNumber')
        stepText3.classList.add('stepText')

        stepNumberA1.classList.add('stepNumber')
        stepTextA1.classList.add('stepText')

        stepNumberA2.classList.add('stepNumber')
        stepTextA2.classList.add('stepText')

        stepNumberA3.classList.add('stepNumber')
        stepTextA3.classList.add('stepText')

        form1.classList.add('display')
        form2.classList.add('display')
        form3.classList.remove('display')

        secondLine.classList.add('green')

        secondLineAdap.classList.add('green')

        titleStep.innerHTML = 'Завершение регистрации'
    }
})