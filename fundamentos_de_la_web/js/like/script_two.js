
const objeto = {
    'one': 0,
    'two': 0,
    'three': 0
};
function like(id){
    switch(id){
        case 'one':
            const one = document.querySelector(".text_like_one");
            objeto['one'] += 1;
            one.textContent = objeto['one'] + " like(s)";
            break;
        case 'two':
            const two = document.querySelector(".text_like_two");
            objeto['two'] += 1;
            two.textContent = objeto['two'] + " like(s)";
            break;
        case 'three':
            const three = document.querySelector(".text_like_three");
            objeto['three'] += 1;
            three.textContent = objeto['three'] + " like(s)";
            break;
    }
};