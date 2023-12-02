const apiURL = 'https://backend-contactos-jadc-b1444a39f4f7.herokuapp.com/contactos';
async function cargarContactos() {
    const response = await fetch(apiURL, {method: 'GET', mode: 'cors'});
    const data = await response.json();
  
    if (response.status === 200) {
        const contactos = await response.json();
        const listaContactos = document.getElementById('lista-contactos');

        for (const contacto of contactos) {
            const listItem = document.createElement('li');
            listItem.textContent = `${contacto.id_contacto} ${contacto.nombre} ${contacto.primer_apellido} ${contacto.segundo_apellido} - Email: ${contacto.email} - Teléfono: ${contacto.telefono}`;
            listaContactos.appendChild(listItem);
        }
    } else {
        alert('Error al cargar la lista de contactos.');
    }
}

cargarContactos();