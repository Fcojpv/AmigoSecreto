function agregarAmigo() {
    const input = document.getElementById('amigo');
    const nombre = input.value.trim();
    const regex = /^[a-zA-Z\s]+$/; // Solo permite letras y espacios

    if (!nombre) {
        alert('El nombre no puede estar vacío.');
        return;
    }

    if (!regex.test(nombre)) {
        alert('El nombre contiene caracteres no válidos.');
        return;
    }

    const lista = document.getElementById('listaAmigos');
    const li = document.createElement('li');
    li.textContent = nombre;
    lista.appendChild(li);
    input.value = '';
}

function sortearAmigo() {
    const lista = document.getElementById('listaAmigos');
    const amigos = lista.getElementsByTagName('li');
    if (amigos.length === 0) {
        alert('No hay nombres en la lista para sortear.');
        return;
    }
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const nombreSorteado = amigos[indiceAleatorio].textContent;
    const resultado = document.getElementById('nombreSorteado');
    resultado.textContent = `Amigo secreto: ${nombreSorteado}`;
    resultado.style.fontWeight = 'bold';
    resultado.style.color = 'red';
}