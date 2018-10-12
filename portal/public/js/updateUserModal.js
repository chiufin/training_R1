$( document ).ready(function() {
    //modal


    $("#users .edit").click(function() {
        $("#updateUserModal").css({ display: 'block' })
        var index = $("#users .edit").index(this)
        var id =  $('.id')[index].textContent;
        var payload = { id }
        var callback = function( res ) {
            $("#update_user_id").val(res.id)
            $("#update_user_name").val(res.name)
            $("#update_user_email").val(res.email)
            $("#update_user_password").val(res.psw)
        }
        api.getUser(payload, callback)
    });



    $("#updateUserBtn").click(function() {
        var payload = {
            id: $("#update_user_id")[0].value,
            body: {
                name: $("#update_user_name")[0].value,
                email: $("#update_user_email")[0].value,
                psw: $("#update_user_password")[0].value
            }
        }

        var successCallback = function( msg ) {
            console.log(msg)
            if(msg){
                window.location = '/users'
            }else{
                $("#updateUserModal").find(".error-msg").css({ visibility: 'visible' })
            }
        }
        var errorCallback = function( msg ) {
            console.log(msg)
            $("#updateUserModal").find(".error-msg").css({ visibility: 'visible' })
        }
        api.updateUser(payload, successCallback, errorCallback)
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