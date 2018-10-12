$( document ).ready(function() {

    $("#createUserModal").find(".submit").click(function(){
        var payload = { 
            body: {
                name: $("#createUserModal").find("input")[0].value,
                email: $("#createUserModal").find("input")[1].value,
                password: $("#createUserModal").find("input")[2].value,
            }
        }

        var successCallback = function( msg ) {
            if(msg){
                window.location = '/users'
            }else{
                $("#createUserModal").find(".error-msg").css({ visibility: 'visible' })
            }
        }
        var errorCallback = function( msg ) {
            $("#createUserModal").find(".error-msg").css({ visibility: 'visible' })
        }
        api.createUser(payload, successCallback, errorCallback)
    })


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