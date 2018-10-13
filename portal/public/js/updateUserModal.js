$( document ).ready(function() {
    //modal


    $("#users .edit").click(function() {
        $("#updateUserModal").css({ display: 'block' })
        var index = $("#users .edit").index(this)
        var id =  $('.id')[index].textContent;
        var payload = { id }
        var callback = function( res ) {
            if(res.updated_time){
                $(".time").text(`Updated Time: ${timestamp(res.updated_time)}`)
            }else{
                $(".time").text(`Created Time: ${timestamp(res.created_time)}`)
            }
            
            $("#update_user_id").val(res.id)
            $("#update_user_name").val(res.name)
            $("#update_user_email").val(res.email)
        }
        api.getUser(payload, callback)
    });


    $("#updateUserBtn").click(function() {
        if($("#updateUserModal").find("input")[3].value !== $("#updateUserModal").find("input")[4].value){
            $("#updateUserModal").find(".error-psw-msg").css({ visibility: 'visible' })
        }else{
            var payload = {
                id: $("#updateUserModal").find("input")[0].value,
                body: {
                    name: $("#updateUserModal").find("input")[1].value,
                    email: $("#updateUserModal").find("input")[2].value,
                    psw: $("#updateUserModal").find("input")[3].value
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
        }
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