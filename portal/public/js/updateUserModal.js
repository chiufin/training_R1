$( document ).ready(function() {
    //modal
    $("#users .edit").click(function() {
        $("#updateUserModal").css({ display: 'block' })
    });

    $("#closeUpdateUserPanel").click(function() {
        $("#updateUserModal").css({ display: 'none' })
    });

    window.onclick = function(event) {
        if (event.target.id == 'updateUserModal') {
            $("#updateUserModal").css({ display: 'none' })
        }
    }

});