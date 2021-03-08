//Pega os cookies e retorna na forma de objetos JSON
function cookies(){
    var c = document.cookie
    if(c == '' || typeof c === 'undefined'){
        return {'allCookies':''}
    }
    var jasonCookies = c.split('; ')
    var jasonCookies2 = '{'
    for(var i in jasonCookies){
        var j = jasonCookies[i].split("=")
        jasonCookies2 += '"' + j[0] + '"' + ':' + '"' + j[1] + '"' + ','
    }
    jasonCookies = jasonCookies2.slice(0, jasonCookies2.length - 1) + '}'
    jasonCookies = JSON.parse(jasonCookies)
    jasonCookies.allCookies = c

    return jasonCookies
}