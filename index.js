const submitData = function(name, email) {
    return fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        body: JSON.stringify({
            name,
            email
          })
        })
.then(function(responce) {
    return responce
    })
.then(function(object) {
    document.body.innerHTML = object[ "id" ]
})
.catch(function(error) {
    document.body.innerHTML = error.message
})
}

console.log(submitData)


