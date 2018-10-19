$( document ).ready(function() {

    //delete file
    $("#filePage .delete").click(function() {
        var index = $("#filePage .delete").index(this)
        var payload = $("#filePage .file_name")[index].textContent
        var callback = function( msg ) {
            window.location = '/files'
        }
        api.deleteFile(payload, callback)
    });
});