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
            $coll.setAttribute('id', '' + i + j);
            $row.appendChild($coll);
        }
        $table.appendChild($row);
    }
}

createTable();







