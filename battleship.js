// строим таблицу

function createTable() {
    var SIZE = {
        WIDTH: 7,
        HEIGHT: 7,
    }
    var $table = document.querySelector('#table');
    for(var i = 0; i < SIZE.WIDTH; i++){
        var $row = document.createElement('tr');
        for(var j = 0; j < SIZE.HEIGHT; j++){
            var $coll = document.createElement('td');
            // $coll.textContent = '' + i + j;
            $coll.setAttribute('id', '' + i + j);
            $row.appendChild($coll);
        }
        $table.appendChild($row);
    }
}

function init() {
    createTable();

    var $fireButton = document.querySelector('#fireButton');
    $fireButton.addEventListener('click', handleFireButton);
}

window.addEventListener('load', init);

function handleFireButton() {
    var $guessInput = document.querySelector('#guessInput');
    var guess = $guessInput.value;

    controller.processGuess(guess);
    $guessInput.value = '';
}

// игра

function parseQuess(quess) {
var alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];

    if (quess === null || quess.length !== 2) {
        alert('Oops, please enter a letter and a number on the board!');
    } else {
        firstChar = quess.charAt(0).toUpperCase();
        var row = alphabet.indexOf(firstChar);
        var column = quess.charAt(1);

        if (isNaN(row) || isNaN(column)) {
            alert('Oops, that isnt on the board.');
        }  else if (row < 0 || row >= model.boardSize || column < 0 || column >= model.boardSize) {
            alert('Oops, thats off the board!');
        } else {
            return row + column;
        }
    }
    return null;
}



var view = {
    displayMessage: function(msg) {
        var $messageArea = document.querySelector('#messageArea');
        $messageArea.textContent = msg;
    },
    displayHit: function(location) {
        var $td = document.getElementById(location);
        $td.classList.add('hit');
    },
    displayMiss: function(location) {
        var $td = document.getElementById(location);
        $td.classList.add('miss');
    }
}

var model = {
    boardSize: 7,
    numShips: 3,
    shipLength: 3,
    shipsSunk: 0,

    ships: [
        {locations: ['06', '16', '26'], hits: ['', '', '']},
        {locations: ['24', '34', '44'], hits: ['', '', '']},
        {locations: ['10', '11', '12'], hits: ['', '', '']},
    ],

    fire: function(quess) {
        for(var i = 0; i < this.numShips; i++){
            var ship = this.ships[i];
            var index = ship.locations.indexOf(quess);
            if(index >= 0) {
                ship.hits[index] = 'hit';
                view.displayHit(quess);
                view.displayMessage('HIT!');
                if (this.isSunk(ship)) {
                    view.displayMessage('You sank my battleship!');
                    this.shipsSunk++
                }
                return true;
            }
        }
        view.displayMiss(quess);
        view.displayMessage('You missed!');
    },

    isSunk: function(ship) {
        for (var i = 0; i < this.shipLength; i++){
            if (ship.hits[i] !== 'hit') {
                return false;
            }
        }
        return true;
    },
};

var controller = {
    quesses: 0,

    processGuess: function(quess) {
        var location = parseQuess(quess);
        if (location) {
            this.quesses++;
            var hit = model.fire(location);
            if(hit && model.shipsSunk === model.numShips) {
                view.displayMessage('You sank all my battleships, in ' + this.quesses + ' quesses');
            }
        }
    }
};











