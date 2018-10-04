$( document ).ready(function() {
    //modal
    $("#users .edit").click(function() {
        $("#updateUserModal").css({ display: 'block' })
        var index = $("#users .edit").index(this)
        $("#updateUserModal").data(index)

        var payload = { id: index }
        var callback = function( res ) {
            $("#update_user_email").val(res.email)
            $("#update_user_password").val(res.password)
        }
        api.getUser(payload, callback)
    });

    $("#updateUserBtn").click(function() {
        var payload = { id: index }
        var callback = function( res ) {
            $("#update_user_email").val(res.email)
            $("#update_user_password").val(res.password)
        }
        api.getUser(payload, callback)
    });

    $("#closeUpdateUserPanel").click(function() {
        $("#updateUserModal").css({ display: 'none' })
    });

    window.onclick = function(event) {
        if (event.target.id == 'updateUserModal') {
            $("#updateUserModal").css({ display: 'none' })
        }
    }



    // var mvc = {
    //     model: {
    //         users: [

    //         ]
    //     },
    //     view: {},
    //     controller: {}
    // }

    // var modal = {
    //     showModal: function(){

    //     },
    //     closeModal: function(){

    //     }
    // }



});