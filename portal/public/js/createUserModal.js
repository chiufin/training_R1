$( document ).ready(function() {

    $("#createUserModal").find(".submit").click(function(){
        var payload = { 
            body: {
                name: $("#createUserModal").find("input")[0].value,
                email: $("#createUserModal").find("input")[1].value,
                password: $("#createUserModal").find("input")[2].value,
            }
        }
        console.log(payload)
        var callback = function( msg ) {
            if(msg){
                window.location = '/users'
            }
        }
        api.createUser(payload, callback)
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