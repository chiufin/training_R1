$( document ).ready(function() {
    $("#loginPage").find("button").click(function() {
        var payload = { 
            body: {
                account: $("#loginPage").find("input")[0].value,
                psw: $("#loginPage").find("input")[1].value
            }
        }
        var successCallback = function( msg ) {
            if(msg.login == true){
                window.location = '/users'
            }else{
                $("#loginPage").find(".error-msg").css({ visibility: 'visible' })
            }
        }
        var errorCallback = function( msg ) {
            $("#loginPage").find(".error-msg").css({ visibility: 'visible' })
        }
        api.login(payload, successCallback, errorCallback)
    });

     //focus and clear error msg
     $("#loginPage").find("input").focus(function() {
        $("#loginPage").find(".error-msg").css({ visibility: 'hidden' })
    });

    $(".logout").click(function(){
        var successCallback = function(){
            window.location = '/login'
        }
        var errorCallback = function(){
           
        }
        api.logout(successCallback, errorCallback)
    })
        
});