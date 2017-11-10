document.getElementById("btn").onclick = function() {
    var numbr = document.getElementById("numbr").value;
    if (numbr.length < 10){
        console.log('Should get at least 10 characters. ' + numbr.length + ' given.');
        document.getElementById("error").innerHTML = "O telefone deve conter DDD e pelo menos 8 dígitos";
        document.getElementById("error").style.display = null;

    } else {
        console.log('Redirecting...');
        document.getElementById("error").style.display = 'none';
        window.location = "https://api.whatsapp.com/send?phone=55" + numbr;
    }
}

// Register SW.js
if ('serviceWorker' in navigator) {
    navigator.serviceWorker
    .register('service-worker.js')
    .then(function(reg) {
        console.log('Service worker Registered');
    })
    .catch(function (err) {
        console.log('Erro: ', err);
    });
}
