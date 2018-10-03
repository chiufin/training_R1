$( document ).ready(function() {


    //modal
    $("#createUser").click(function() {
        $("#createUserModal").css({ display: 'block' })
    });

    $("#closeUserPanel").click(function() {
        $("#createUserModal").css({ display: 'none' })
    });

    window.onclick = function(event) {
        if (event.target.id == 'createUserModal') {
            $("#createUserModal").css({ display: 'none' })
        }
    }

    //edit user
    $("#users .edit").click(function() {
        var index = $("#users .edit").index(this)
        var payload = { index }
        var callback = function( msg ) {
            alert( msg.message );
        }
        api.updateUser(payload, callback)
    });

    //delete user
    $("#users .delete").click(function() {
        var index = $("#users .delete").index(this)
        var payload = { index }
        var callback = function( msg ) {
            alert( msg.message );
        }
        api.deleteUser(payload, callback)
    });
});