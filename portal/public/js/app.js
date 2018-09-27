$( document ).ready(function() {

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
});