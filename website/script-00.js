
// Global Variables.
const candidates = [
    { fname: 'Peter Parker', nlikes: 700 },
    { fname: 'Tony Stark', nlikes: 135 },
    { fname: 'dash', nlikes: 0 },
]

// Counter variable for additional submitted names.
var i = 3;


// Functions
function funConst() {
    $('#box-1').append("<table class='table'><thead><tr><th>Full Name | </th><th># of Likes | </th><th> Like |</th><th> Delete |</th></tr></thead><tbody>");
    for (var i = 0; i < candidates.length; i++) {
        $('.table').append("<tr id='perRow" + i + "'><td>" + candidates[i].fname + "</td><td id='c" + i + "'>"
            + candidates[i].nlikes + "</td>"
            + '<td><button type="button" onclick="addLike(' + i + ')"><i class="glyphicon glyphicon-thumbs-up" style="font-size: 22px; color: rgb(30, 143, 1)"></i></button></td>'
            + '<td><button type="button" onclick="delRow(' + i + ')"><i class="glyphicon glyphicon-remove" style="font-size: 22px; color: red;"></i></button></td></tr>');
    }

}

function addLike(arg1) {
    candidates[arg1].nlikes += 1;
    document.getElementById("c" + [arg1]).innerHTML = candidates[arg1].nlikes;
}

function delRow(arg1) {
    candidates[arg1].fname = null;
    candidates[arg1].nlikes = null;
    document.getElementById("perRow" + [arg1]).innerHTML = null;
}

function addPer() {
    var userName = document.getElementById("userName").value;
    candidates.push({ fname: userName, nlikes: 0 });

    while (i < candidates.length) {
        $('.table').append("<tr id='perRow" + i + "'><td>" + candidates[i].fname + "</td><td id='c" + i + "'>"
            + candidates[i].nlikes + "</td>"
            + '<td><button type="button" onclick="addLike(' + i + ')"><i class="glyphicon glyphicon-thumbs-up" style="font-size: 22px; color: rgb(30, 143, 1)"></i></button></td>'
            + '<td><button type="button" onclick="delRow(' + i + ')"><i class="glyphicon glyphicon-remove" style="font-size: 22px; color: red;"></i></button></td></tr>')
        i++;
    }
}

// Start
$(document).ready($('#box-1').ready(funConst()));






