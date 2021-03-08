# getCookies
Javascript function.

Get the cookies from the page and return them in JSON object format.

Example of use:
```
document.cookie = 'name=Marcelo'
document.cookie = 'age=38'

var niceGuy = getCookies()

window.alert(niceGuy.allCookies)
window.alert(niceGuy.name)
window.alert(niceGuy.age)
```

