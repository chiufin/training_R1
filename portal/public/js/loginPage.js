$( document ).ready(function() {
    $("#loginPage").find("button").click(function() {
        var payload = { 
            body: {
                account: $("#loginPage").find("input")[0].value,
                psw: $("#loginPage").find("input")[1].value
            }
        }
        var callback = function( msg ) {
            if(msg.login == true){
                window.location = '/users'
            }else{
                window.location = '/login'
            }
        }
        api.login(payload, callback)
    });
    
});