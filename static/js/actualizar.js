async function actualizarContacto() {
    try {
        const id = document.getElementById('actualizar-id').value;
        const nuevoNombre = document.getElementById('actualizar-nombre').value;
        const nuevoApellido_paterno = document.getElementById('actualizar-apellido-paterno').value;
        const nuevoApellido_materno = document.getElementById('actualizar-apellido-materno').value;
        const nuevoEmail = document.getElementById('actualizar-email').value;
        const nuevoTelefono = document.getElementById('actualizar-telefono').value;

        const response = await fetch(`https://backend-contactos-jadc-b1444a39f4f7.herokuapp.com/contactos/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                nombre: nuevoNombre,
                primer_apellido: nuevoApellido_paterno,
                segundo_apellido: nuevoApellido_materno,
                email: nuevoEmail,
                telefono: nuevoTelefono,
            }),
        });

        if (response.ok) {
            alert('Contacto actualizado correctamente.');
            document.location.reload();
        } else {
            const errorData = await response.json();
            alert(`Error al actualizar el contacto: ${errorData.detail}`);
        }
    } catch (error) {
        console.error('Error inesperado:', error);
        alert('Error inesperado al actualizar el contacto.');
    }
}
