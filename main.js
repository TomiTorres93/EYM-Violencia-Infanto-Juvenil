// VIDEO 

const mostrar = document.getElementById('mostrar') 

videobutton.addEventListener('click', function () {
   if (mostrar.classList.contains('nomostrar')) {
    mostrar.classList.remove('nomostrar');
    } else {
        mostrar.classList.add('nomostrar')
    }}
);