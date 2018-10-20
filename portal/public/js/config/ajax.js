var api = {
    login: function(payload, successCallback, errorCallback){
        $.ajax({
            type: "POST",
            url: `api/login`,
            data: payload.body,
            success: successCallback,
            error: errorCallback
        })
    },
    logout: function(successCallback, errorCallback){
        $.ajax({
            url: `api/logout`,
            success: successCallback,
            error: errorCallback
        })
    },
    // getUserList: function(){},
    getUser: function(payload, callback){
        $.ajax({
            type: "GET",
            url: `api/users/${payload.id}`
        })
        .done(callback);
    },
    createUser: function(payload, successCallback, errorCallback){
        $.ajax({
            type: "POST",
            url: `api/users`,
            data: payload.body,
            success: successCallback,
            error: errorCallback
        })
    },
    updateUser: function(payload, successCallback, errorCallback){
        $.ajax({
            type: "PUT",
            url: `api/users/${payload.id}`,
            data: payload.body,
            success: successCallback,
            error: errorCallback
        })
    },
    deleteUser: function(payload, callback){
        $.ajax({
            type: "DELETE",
            url: `api/users/${payload.id}`
        })
        .done(callback);
    },
    uploadFile: function(){},
    downloadFile: function(payload, callback){
        $.ajax({
            type: "GET",
            url: `api/download//${encodeURI(payload)}`,
            xhrFields: {
                responseType: 'blob'
            },
            success: function (data) {
                console.log(data)
                var a = document.createElement('a');
                var url = window.URL.createObjectURL(data);
                console.log(url)
                a.href = url;
                a.download = `${payload}`;
                a.click();
                window.URL.revokeObjectURL(url);
            }
        })
    },
    deleteFile: function(payload, callback){
        $.ajax({
            type: "DELETE",
            url: `api/deleteFile/${encodeURI(payload)}`
        })
        .done(callback);
    }
}