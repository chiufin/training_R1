$( document ).ready(function() {

    $("#updateUserModal").find(".submit").click(function() {
        if($("#update_user_password")[0].value !== $("#update_user_password_confirm")[0].value){
            $("#updateUserModal").find(".error-psw-msg").css({ visibility: 'visible' })
        }else{
            var payload = {
                id: $("#update_user_id")[0].value,
                body: {
                    name: $("#update_user_name")[0].value,
                    email: $("#update_user_email")[0].value,
                    psw: $("#update_user_password")[0].value
                }
            }
    
            var successCallback = function( msg ) {
                if(msg){
                    window.location = '/users'
                }else{
                    $("#updateUserModal").find(".error-msg").css({ visibility: 'visible' })
                }
            }
            var errorCallback = function() {
                $("#updateUserModal").find(".error-msg").css({ visibility: 'visible' })
            }
            api.updateUser(payload, successCallback, errorCallback)
        }
    });


    $('.modal__close').click(function(){
        console.log($('.modal'))
        console.log($(this).data('modal-close'))
    });

    // $("#updateUserModal").find('.modal__close').click(function() {
    //     $("#updateUserModal").css({ display: 'none' })
    // });

    //focus and clear error msg
    $("#updateUserModal").find("input").focus(function() {
        $("#updateUserModal").find(".error-msg").css({ visibility: 'hidden' })
        $("#updateUserModal").find(".error-psw-msg").css({ visibility: 'hidden' })
    });

});