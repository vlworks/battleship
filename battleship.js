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

createTable();

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










