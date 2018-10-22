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

    //upload
    $("#filePage .upload").submit(function(e) {
        e.preventDefault();
        var payload = new FormData($(this)[0])
        var successCallback = function(){
            window.location = '/files'
        }
        var errorCallback = function(){
            console.log('upload file error callback')
        }
        api.uploadFile(payload, successCallback, errorCallback)
    });

});