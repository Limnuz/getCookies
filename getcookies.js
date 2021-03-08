//Pega os cookies e retorna na forma de objetos JSON
function getCookies(){
    var cookies = document.cookie
    if(cookies == '' || typeof cookies === 'undefined'){
        return {'allCookies':''}
    }
    var jasonCookies = cookies.split('; ')
    var jasonCookies2 = '{'
    for(var i in jasonCookies){
        var j = jasonCookies[i].split("=")
        jasonCookies2 += '"' + j[0] + '"' + ':' + '"' + j[1] + '"' + ','
    }
    jasonCookies = jasonCookies2.slice(0, jasonCookies2.length - 1) + '}'
    jasonCookies = JSON.parse(jasonCookies)
    jasonCookies.allCookies = cookies

    return jasonCookies
}
