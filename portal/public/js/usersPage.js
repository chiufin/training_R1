$( document ).ready(function() {

    //delete user
    $("#users .delete").click(function() {
        var index = $("#users .delete").index(this)
        console.log(index)
        var id =  $('.id')[index].textContent;
        var payload = { id }
        var callback = function( msg ) {
            window.location = '/users'
        }
        api.deleteUser(payload, callback)
    });
});