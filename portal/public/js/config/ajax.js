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
    logout: function(){},
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
    updateUser: function(payload, callback){
        $.ajax({
            type: "PUT",
            url: `api/users/${payload.id}`,
            data: payload.body
        })
        .done(callback);
    },
    deleteUser: function(payload, callback){
        $.ajax({
            type: "DELETE",
            url: `api/users/${payload.id}`
        })
        .done(callback);
    },
    uploadFile: function(){},
    getFile: function(){},
    deleteFile: function(){},
}