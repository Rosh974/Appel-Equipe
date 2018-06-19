$(document).ready(function () {

    $.ajax({             // attach a handler to an event for the elements        
        type: 'GET',
        url: 'http://127.0.0.1:7777/equipes',
        success: function (datas) {
            for (var id in datas) {
                $('#equip').append('<div class="mt-5 mx-auto" style="width:250px">'+'<b style="font-size:50px"> '+datas[id].pays +'</b>'+'<div class="inline-block "> <img class="" style="width:250px; " src="'+datas[id].flag +'"> </div>' +'</div>')
            }
        },

        error: function () {
            // alert('La requête n\'a pas abouti');
        }
    })
});






