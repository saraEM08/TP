let button = document.querySelector('.button');
let input = document.querySelector('.input');
let output = document.querySelector('.output');

button.addEventListener('click', () => {
    output.innerHTML = input.value;
});

