$( document ).ready(function() {
    //modal
    $("#users .edit").click(function() {
        $("#updateUserModal").css({ display: 'block' })
        var index = $("#users .edit").index(this)
        var id =  $('.id')[index].textContent;
        var payload = { id }
        var callback = function( res ) {
            if(res.updated_time){
                $(".time").text(`Updated Time: ${changeToTaipeiTime(res.updated_time)}`)
            }else{
                $(".time").text(`Created Time: ${changeToTaipeiTime(res.created_time)}`)
            }

            $("#updateUserModal").find('.dirty-input').addClass('is-dirty')
            $("#update_user_id").val(res.id)
            $("#update_user_name").val(res.name)
            $("#update_user_email").val(res.email)
        }
        api.getUser(payload, callback)
    });


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
            var errorCallback = function( msg ) {
                $("#updateUserModal").find(".error-msg").css({ visibility: 'visible' })
            }
            api.updateUser(payload, successCallback, errorCallback)
        }
    });



    $("#updateUserModal").find('.modal_close').click(function() {
        $("#updateUserModal").css({ display: 'none' })
    });

    //focus and clear error msg
    $("#updateUserModal").find("input").focus(function() {
        $("#updateUserModal").find(".error-msg").css({ visibility: 'hidden' })
        $("#updateUserModal").find(".error-psw-msg").css({ visibility: 'hidden' })
    });

});