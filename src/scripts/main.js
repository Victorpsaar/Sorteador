document.addEventListener('DOMContentLoaded',function() {
    document.getElementById('form-sorteador').addEventListener('submit', function(evento) {
        evento.preventDefault()
        let numeroMaximo = document.getElementById('numero-maximo').value;
        numeroMaximo = parseInt(numeroMaximo);

        let numeroAleatorio = Math.trunc(Math.random() * numeroMaximo);
        document.getElementById('result').innerText = numeroAleatorio

        document.querySelector('.result').style.display = 'block';
    })
})