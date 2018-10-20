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

    //download
    $("#filePage .download").click(function() {
        var index = $("#filePage .download").index(this)

        var payload = $("#filePage .file_name")[index].textContent
        api.downloadFile(payload)
    });

});