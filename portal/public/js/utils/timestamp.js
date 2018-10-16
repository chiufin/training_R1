var changeToLocalTime = function(t){
    moment.tz.add("Asia/Taipei|CST JST CDT|-80 -90 -90|01020202020202020202020202020202020202020|-1iw80 joM0 1yo0 Tz0 1ip0 1jX0 1cN0 11b0 1oN0 11b0 1oN0 11b0 1oN0 11b0 10N0 1BX0 10p0 1pz0 10p0 1pz0 10p0 1db0 1dd0 1db0 1cN0 1db0 1cN0 1db0 1cN0 1db0 1BB0 ML0 1Bd0 ML0 uq10 1db0 1cN0 1db0 97B0 AL0|74e5");

    var jun = moment(t);
    console.log(jun.tz('Asia/Taipei').format('MMMM Do YYYY, h:mm:ss a'));
}

var timestamp = function(time){
    var t = time.split(/[- : T .]/);
    changeToLocalTime(time)
   return `${t[0]}/${t[1]}/${t[2]} ${t[3]}:${t[4]}:${t[5]}`
}