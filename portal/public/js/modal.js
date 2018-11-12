$( document ).ready(function() {

    //open modal by clicking btn
    $(".open-modal").click(function() {
        switch($(this).data('modal')){
            case 'createUser':
                $("#createUserModal").css({ display: 'block' })
                break;
            case 'editUser':
                $("#updateUserModal").css({ display: 'block' })
                var index = $("#users .user-edit").index(this)
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
                break;
            default:
                console.warn('data-modal is not set.')
        }
    });

    window.onclick = function(event) {
        if (event.target.id == 'updateUserModal') {
            $("#updateUserModal").css({ display: 'none' })
        }

        if (event.target.id == 'createUserModal') {
            $("#createUserModal").css({ display: 'none' })
        }
    }

});