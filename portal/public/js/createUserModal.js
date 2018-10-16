$( document ).ready(function() {

    $("#createUserModal").find(".submit").click(function(){
        if($("#createUserModal").find("input")[2].value !== $("#createUserModal").find("input")[3].value){
            $("#createUserModal").find(".error-psw-msg").css({ visibility: 'visible' })
        }else{
            var payload = { 
                body: {
                    name: $("#createUserModal").find("input")[0].value,
                    email: $("#createUserModal").find("input")[1].value,
                    password: $("#createUserModal").find("input")[2].value,
                }
            }
    
            var successCallback = function( msg ) {
                window.location = '/users'
            }
            var errorCallback = function( msg ) {
                $("#createUserModal").find(".error-msg").css({ visibility: 'visible' })
            }
            api.createUser(payload, successCallback, errorCallback)
        }
    })


    //modal
    $("#createUser").click(function() {
        $("#createUserModal").css({ display: 'block' })
    });

    $("#closeCreateUserPanel").click(function() {
        $("#createUserModal").css({ display: 'none' })
    });

    //focus and clear error msg
    $("#createUserModal").find("input").focus(function() {
        $("#createUserModal").find(".error-msg").css({ visibility: 'hidden' })
        $("#createUserModal").find(".error-psw-msg").css({ visibility: 'hidden' })
    });

});