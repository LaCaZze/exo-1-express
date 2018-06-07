jQuery(document).ready(function () {

    $.ajax({    
        url: 'http://localhost:3666/liste', // La ressource ciblée
        type: 'GET', //type de requette. Ici un port n'a pas de sens on a rien a envoyer au sreveur
        //GET type par défaut, normalement pas besoin de le préciser

        success: function (data) {
            for(var id in data){
                $('#recuperation').append('<li>' + data[id].name.first + ' ' + data[id].name.last + '</li>')
                console.log(data[id].name.first + ' '+ data[id].name.last);
            }
        }
    });

});

//TO DO : reprendre ce qui est retourné par le success et l'utiliser dans un each()
// ou faire une boucle for pour reccupéré la class list pour afficher la liste
