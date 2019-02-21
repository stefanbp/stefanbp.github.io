window.onload = function () {
    printlist();

};
let dataindex;
let dataindex2;


//Alla
function printlist() {
    data = kurser;
    data2 = kommandekurser;
    dataindex = 0;
    dataindex2 = 0;
    var output = document.getElementById("list");
    let html = "";
    for (let x = 0; data.length > x; x++) {
        html += '<div class="card text-white bg-secondary m-2" style="width: 20rem;">';
        html += '<div class="card-header" style="height: 110px;"><h4><a href="'+ data[x].länkkurs +'">' +data[x].kurs+'</a> </h4></div>';
        html += '<div class="card-body">';
        html += '<h5 class="card-title">' + data[x].plats + '</h5>';
        html += '<p class="card-text" style="color: #3E3F3A">' + data[x].längd +'</p>';
        // html += '<p class="card-text">' + data[x].beskrivning +'</p>';
        html += '</div>';
        html += '<div class="card-footer text-right"><a href="' + data[x].länklärare +'">' + "Lärare: " + data[x].lärare +  '</a>';
        html += '</div>';
        html += '<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal'+ dataindex +'">Mer info</button>';
        html += '</div>';
        html += '<div class="modal fade" id="exampleModal'+ dataindex +'" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true"><div class="modal-dialog" role="document"><div class="modal-content"><div class="modal-header"><h5 class="modal-title" id="exampleModalLabel">'+data[dataindex].kurs +'</h5><button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button></div><div class="modal-body">'+data[dataindex].beskrivning +'</div><div class="modal-footer"><button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button></div></div></div></div>';
        dataindex++
    }

    for (let x = 0; data2.length > x; x++) {

        html += '<div class="card border-secondary m-2" style="width: 20rem;">';
        html += '<div class="card-header" style="height: 110px;"><h4><a href="'+ data2[x].länkkurs +'">' +data2[x].kurs+ ' (ej klar)</a> </h4></div>';
        html += '<div class="card-body">';
        html += '<h5 class="card-title">' + data2[x].plats + '</h5>';
        html += '<p class="card-text" style="color: #3E3F3A">' + data2[x].längd +'</p>';
        // html += '<p class="card-text">' + data2[x].beskrivning +'</p>';
        html += '</div>';
        html += '<div class="card-footer text-right"><a href="' + data2[x].länklärare +'">' + "Lärare: " + data2[x].lärare +  '</a>';
        html += '</div>';
        html += '<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalb'+ dataindex2 +'">Mer info</button>';
        html += '</div>';
        html += '<div class="modal fade" id="exampleModalb'+ dataindex2 +'" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true"><div class="modal-dialog" role="document"><div class="modal-content"><div class="modal-header"><h5 class="modal-title" id="exampleModalLabel">'+data2[dataindex2].kurs +'</h5><button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button></div><div class="modal-body">'+data2[dataindex2].beskrivning +'</div><div class="modal-footer"><button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button></div></div></div></div>';

        dataindex2++
    }
    output.innerHTML = html;
}

//endast avslutade
function printlist2() {
    data = kurser;
    data2 = kommandekurser;
    dataindex = 0;
    dataindex2 = 0;
    var output = document.getElementById("list");
    let html = "";
    for (let x = 0; data.length > x; x++) {
        html += '<div class="card text-white bg-secondary m-2 justify-content-center" style="width: 20rem;">';
        html += '<div class="card-header" style="height: 110px;"><h4><a href="'+ data[x].länkkurs +'">' +data[x].kurs+'</a> </h4></div>';
        html += '<div class="card-body">';
        html += '<h5 class="card-title">' + data[x].plats + '</h5>';
        html += '<p class="card-text" style="color: #3E3F3A">' + data[x].längd +'</p>';
        // html += '<p class="card-text">' + data[x].beskrivning +'</p>';
        html += '</div>';
        html += '<div class="card-footer text-right"><a href="' + data[x].länklärare +'">' + "Lärare: " + data[x].lärare +  '</a>';
        html += '</div>';
        html += '<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal'+ dataindex +'">Mer info</button>';
        html += '</div>';
        html += '<div class="modal fade" id="exampleModal'+ dataindex +'" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true"><div class="modal-dialog" role="document"><div class="modal-content"><div class="modal-header"><h5 class="modal-title" id="exampleModalLabel">'+data[dataindex].kurs +'</h5><button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button></div><div class="modal-body">'+data[dataindex].beskrivning +'</div><div class="modal-footer"><button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button></div></div></div></div>';
        dataindex++
    }

    output.innerHTML = html;
}
//endast pågående
function printlist3() {
    data = kurser;
    data2 = kommandekurser;
    dataindex = 0;
    dataindex2 = 0;
    var output = document.getElementById("list");
    let html = "";

    for (let x = 0; data2.length > x; x++) {

        html += '<div class="card border-secondary m-2" style="width: 20rem;">';
        html += '<div class="card-header" style="height: 110px;"><h4><a href="'+ data2[x].länkkurs +'">' +data2[x].kurs+ ' (ej klar)</a> </h4></div>';
        html += '<div class="card-body">';
        html += '<h5 class="card-title">' + data2[x].plats + '</h5>';
        html += '<p class="card-text" style="color: #3E3F3A">' + data2[x].längd +'</p>';
        // html += '<p class="card-text">' + data2[x].beskrivning +'</p>';
        html += '</div>';
        html += '<div class="card-footer text-right"><a href="' + data2[x].länklärare +'">' + "Lärare: " + data2[x].lärare +  '</a>';
        html += '</div>';
        html += '<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalb'+ dataindex2 +'">Mer info</button>';
        html += '</div>';
        html += '<div class="modal fade" id="exampleModalb'+ dataindex2 +'" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true"><div class="modal-dialog" role="document"><div class="modal-content"><div class="modal-header"><h5 class="modal-title" id="exampleModalLabel">'+data2[dataindex2].kurs +'</h5><button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button></div><div class="modal-body">'+data2[dataindex2].beskrivning +'</div><div class="modal-footer"><button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button></div></div></div></div>';

        dataindex2++
    }
    output.innerHTML = html;
}
// <div class="card text-white bg-secondary mb-3" style="max-width: 20rem;">
//     <div class="card-header">Header</div>
//     <div class="card-body">
//     <h4 class="card-title">Secondary card title</h4>
// <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
// </div>
// </div>