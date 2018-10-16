$( document ).ready(function() {


    window.onclick = function(event) {
        if (event.target.id == 'updateUserModal') {
            $("#updateUserModal").css({ display: 'none' })
        }

        if (event.target.id == 'createUserModal') {
            $("#createUserModal").css({ display: 'none' })
        }
    }

});