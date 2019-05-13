var randomLoc = Math.floor(Math.random() * 5);
var location1 = randomLoc;
var location2 = location1 + 1;
var location3 = location2 + 1;
var guess;
var hits = 0;
var guesses = 0;
var isSunk = false;

while (isSunk == false){
    guess = prompt('Готово, огонь (введите число 0-6)');

    if(guess < 0 || guess > 6 || isNaN(guess)){
        alert('Введите корректное значение!');
    } else {
        guesses += 1;

        if(guess == location1 || guess == location2 || guess == location3){
            hits += 1;
            alert('Попал!');
            if(hits == 3){
                isSunk = true;
                alert('Вы уничтожили корабль!');                
            }
        } else {
            alert('Промах!');
        }
    }

    if(guess == null){
        alert('Игра окончена!');
        isSunk = true;
    }
}

var stats = 'Вы использовали ' + guesses + ' попыток, Ваша точность: ' + (3 / guesses);
alert(stats);









//test
// guesses -= 1;
// console.log('Попытки: ' + guesses);
// console.log('Hits: ' + hits);