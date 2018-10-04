$( document ).ready(function() {

    //edit user
    // $("#users .edit").click(function() {
    //     var index = $("#users .edit").index(this)

    //     // var payload = { index }
    //     // var callback = function( msg ) {
    //     //     alert( msg.message );
    //     // }
    //     // api.updateUser(payload, callback)
    // });

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