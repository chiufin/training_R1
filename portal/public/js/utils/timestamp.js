var timestamp = function(time){
    var t = time.split(/[- : T .]/);
   return `${t[0]}/${t[1]}/${t[2]} ${t[3]}:${t[4]}:${t[5]}`
}