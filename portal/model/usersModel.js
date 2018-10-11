var connection = require('../db.js').connection;

var usersModal = {
    // checkLogin: function(cookies){
    //     try{
    //         connection.query(`SELECT * FROM user WHERE email=${JSON.stringify(cookies.account)}`, function(err, result, fields) {
    //             if (err) throw err; 
    //             console.log(result)
    //             if(result[0].psw == cookies.psw){
    //                 console.log("check --------- ")
    //                 return true
    //             }else{
    //                 return false
    //             }
    //         });
    //     }catch(err){
    //         return false
    //         console.log(err)
    //     }
    // },


}

module.exports = usersModal