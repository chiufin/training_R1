var api = {
    login: function(){},
    logout: function(){},
    getUserList: function(){},
    getUser: function(payload, callback){
        $.ajax({
            type: "GET",
            url: `api/users/${payload.id}`
        })
        .done(callback);
    },
    createUser: function(){},
    updateUser: function(payload, callback){
        $.ajax({
            type: "PUT",
            url: `api/users/${payload.id}`
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