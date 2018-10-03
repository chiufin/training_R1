var api = {
    login: function(){},
    logout: function(){},
    getUserList: function(){},
    getUser: function(){},
    createUser: function(){},
    updateUser: function(payload, callback){
        $.ajax({
            type: "PUT",
            url: `api/users/${payload.index}`
        })
        .done(callback);
    },
    deleteUser: function(payload, callback){
        $.ajax({
            type: "DELETE",
            url: `api/users/${payload.index}`
        })
        .done(callback);
    },
    uploadFile: function(){},
    getFile: function(){},
    deleteFile: function(){},
}