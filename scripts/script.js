let a = ''; //Первый номер
let b = ''; //Второй номер
let sing = ''; //Знак операции
let finish = false;

const digit = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
const action = ['-', '+', 'X', '/','%','+/-'];

//Получаем экран
const out = document.querySelector('.calc-screen__subtitle');

//Очистка полей ac

function clearAll () {
    a = '';
    b = '';
    sing = '';
    finish = false;
    out.textContent = 0;
}

document.querySelector('.buttons__ac').onclick = clearAll;

document.querySelector('.buttons').onclick = (event) =>{
    //Клик не по кнопке
    if(!event.target.classList.contains('buttons__btn')) return;
    //Клик по кнопке очистить ac
    if(event.target.classList.contains('buttons__ac')) return;

    out.textContent = '';

    //Получаем нажатую кнопку
    const key = event.target.textContent;

    //Если выбрана клавиша 0-9 или .
    if(digit.includes(key)){
        if(b === '' && sing === ''){
            a+=key;
            out.textContent = a;
        }
        else if (a!=='' && b!=='' && finish){
            b = key;
            finish = false;
            out.textContent = b;
        }
        else {
            b += key;
            out.textContent = b;
        }
        console.log(a, b, sing);
        return;
    }


    //Если выбран знак
    if (action.includes(key)){
        sing = key;
        out.textContent = sing;
        console.log(a, b, sing);
        return;
    }

    //Получение ответа =
    if(key === '='){
        if(b === '') b = a;
        switch (sing){
            case '+':
                a = (+a) + (+b);
                break;

            case '-':
                a = a - b;
                break;

            case 'X':
                a = a * b;
                break;

            case '%':
                a = a / 100;
                break;

            case '+/-':
                a = -a;
                break;

            case '/':
                if (b === '0'){
                    out.textContent = 'Ошибка';
                    a = '';
                    b = '';
                    sing = '';
                    return;
                }
                a = a / b;
                break;
        }
        finish = true;
        out.textContent = a;
        console.log(a, b, sing);
    }
}