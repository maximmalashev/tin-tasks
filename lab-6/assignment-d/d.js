add = function() {
    var values = [
        document.getElementById("first").value,
        document.getElementById("second").value,
        document.getElementById("third").value
    ]

    var table = document.getElementById("table");
    var tr = document.createElement("tr");
    for (var i = 0; i < 3; i++) {
        var td = document.createElement("td");
        td.innerText = values[i];
        tr.appendChild(td);
    }
    table.appendChild(tr);
}