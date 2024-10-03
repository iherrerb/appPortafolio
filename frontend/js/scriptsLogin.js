// frontend/js/scriptsUsuario.js
document.getElementById('user-form').addEventListener('submit', async (e) => {
    e.preventDefault();

    const data = {
        nombre: e.target.nombre.value,
        email: e.target.email.value,
        telefono: e.target.telefono.value,
        password: e.target.password.value,
    };

    const response = await fetch('http://localhost:3000/users', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });

    const result = await response.json();
    alert(result.message);
});

