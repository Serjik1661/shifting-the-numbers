document.getElementById('start-button').onclick = function(){
    const numberString = prompt('Наберите цифры', '');

    const shift = parseInt(prompt('На сколько цифр сдвинуть?'), 10);

    if(isNaN(shift) || shift < 0){
        document.getElementById('result').innerText = 'Введите положительное число для сдвига.';
        return;
    }

    const length = numberString.length;
    const effectiveShift = shift % length;
    const shiftedNumber = numberString.slice(effectiveShift) + numberString.slice(0, effectiveShift);

    document.getElementById('result').innerText = `Сдвинутое число: ${shiftedNumber}`;

};
