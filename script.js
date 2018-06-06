jQuery(document).ready(function () {
    


    $("#more_com").click(function () {

        $.ajax({
            url: 'http://localhost:3666/liste', // La ressource ciblée
            type: 'GET', //type de requette. Ici un port n'a pas de sens on a rien a envoyer au sreveur
            //GET type par défaut, normalement pas besoin de le préciser
            dataType: JSON,
            success: function (index_html, statut) {

            },

            error: function (resultat, statut, erreur) {

            },

            complete: function (resultat, statut) {

            }
        });

    });

});

//TO DO : reprendre ce qui est retourné par le success et l'utiliser dans un each()