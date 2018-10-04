$( document ).ready(function() {


    //modal
    $("#createUser").click(function() {
        $("#createUserModal").css({ display: 'block' })
    });

    $("#closeCreateUserPanel").click(function() {
        $("#createUserModal").css({ display: 'none' })
    });

    window.onclick = function(event) {
        if (event.target.id == 'createUserModal') {
            $("#createUserModal").css({ display: 'none' })
        }
    }

});