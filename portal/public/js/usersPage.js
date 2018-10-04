$( document ).ready(function() {

    //delete user
    $("#users .delete").click(function() {
        var index = $("#users .delete").index(this)
        var payload = { id: index }
        var callback = function( msg ) {
            alert( msg.message );
        }
        api.deleteUser(payload, callback)
    });
});