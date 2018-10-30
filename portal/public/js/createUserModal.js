$( document ).ready(function() {

    $("#createUserModal").find(".submit").click(function(){
        if($("#create_user_psw")[0].value !== $("#create_user_psw_confirm")[0].value){
            $("#createUserModal").find(".error-psw-msg").css({ visibility: 'visible' })
        }else{
            var payload = { 
                body: {
                    name: $("#create_user_name")[0].value,
                    email: $("#create_user_email")[0].value,
                    password: $("#create_user_psw")[0].value,
                }
            }
    
            var successCallback = function() {
                window.location = '/users'
            }
            var errorCallback = function() {
                $("#createUserModal").find(".error-msg").css({ visibility: 'visible' })
            }
            api.createUser(payload, successCallback, errorCallback)
        }
    })


    //modal
    $("#createUser").click(function() {
        $("#createUserModal").css({ display: 'block' })
    });

    $("#createUserModal").find('.modal__close').click(function() {
        $("#createUserModal").css({ display: 'none' })
    });

    //focus and clear error msg
    $("#createUserModal").find("input").focus(function() {
        $("#createUserModal").find(".error-msg").css({ visibility: 'hidden' })
        $("#createUserModal").find(".error-psw-msg").css({ visibility: 'hidden' })
    });

});