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


    //create
    $("#users .delete").click(function() {
        var index = $("#users .delete").index(this)
        $.ajax({
            method: "DELETE",
            url: `api/users/${index}`
        })
        .done(function( msg ) {
            alert( "Data Saved: " + msg.message );
        });
    });
});