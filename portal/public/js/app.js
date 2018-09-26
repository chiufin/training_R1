$( document ).ready(function() {

    $("#createUser").click(function() {
        $("#createUserModal").css({ display: 'block' })
    });

    $("#closeUserPanel").click(function() {
        $("#createUserModal").css({ display: 'none' })
    });

    window.onclick = function(event) {
        console.log(event.target)
        // if (event.target == modal) {
        //     modal.style.display = "none";
        // }
    }
});