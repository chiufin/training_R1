$( document ).ready(function() {
    $("#loginPage").find("button").click(function() {
        var payload = { 
            body: {
                account: $("#account")[0].value,
                psw: $("#password")[0].value
            }
        }
        var successCallback = function() {
            window.location = '/users'   
        }

        var errorCallback = function(){
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
        var errorCallback = function(msg){
           console.warn(msg)
        }
        api.logout(successCallback, errorCallback)
    })
        
});