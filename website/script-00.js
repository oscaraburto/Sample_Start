
const candidates = [
    { fname: 'Peter Parker', nlikes: 700 },
    { fname: 'Tony Stark', nlikes: 135 },
    { fname: 'dash', nlikes: 0 },
]


function funConst() {
    for (var i = 0; i < candidates.length; i++) {
       //document.getElementById("box-1-p").innerHTML = 
       document.write("<tr id='perRow" + i +"'><td>" + candidates[i].fname + "</td><td id='c"+i+"'>" 
                + candidates[i].nlikes + "</td>"
                + '<td><button type="button" onclick="addLike('+ i +')"><i class="glyphicon glyphicon-thumbs-up" style="font-size: 22px; color: rgb(30, 143, 1)"></i></button></td>'
                + '<td><button type="button" onclick="delRow(' + i +')"><i class="glyphicon glyphicon-remove" style="font-size: 22px; color: red;"></i></button></td></tr>');
    }
}                            

function addLike(arg1) {
    candidates[arg1].nlikes += 1;
    document.getElementById("c"+[arg1]).innerHTML = candidates[arg1].nlikes;
}

function delRow(arg1) {
    candidates[arg1].fname = null;
    candidates[arg1].nlikes= null;
    document.getElementById("perRow"+[arg1]).innerHTML = null;
}

// Start
document.write("<table class='table'><thead><tr><th>Full Name | </th><th># of Likes | </th><th> Like |</th><th> Delete |</th></tr></thead><tbody>");
funConst();
document.write("</tbody></table>");




/*    for (var i = 0; i < candidates.length; i++) {
    return candidates[i].fname + ' ' + candidates[i].nlikes;
    
        */