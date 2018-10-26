$( document ).ready(function() {

    //delete user
    $("#users .delete").click(function() {
        var index = $("#users .delete").index(this)
        var id =  $('.id')[index].textContent;
        var payload = { id }
        var callback = function() {
            window.location = '/users'
        }
        api.deleteUser(payload, callback)
    });
});