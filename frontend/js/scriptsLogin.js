// frontend/js/scriptsUsuario.js
document.getElementById('user-form').addEventListener('submit', async (e) => {
    e.preventDefault();

    const data = {
        email: e.target.email.value,
        password: e.target.password.value,
    };

    const response = await fetch('/auth', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });

    const result = await response.json();
    alert(result.message);
});

