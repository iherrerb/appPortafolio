document.getElementById('reservation-form').addEventListener('submit', async (e) => {
    e.preventDefault();

    const data = {
        usuario_id: e.target.usuario_id.value,
        servicio_id: e.target.servicio_id.value,
        fecha_reserva: e.target.fecha_reserva.value,
        notas: e.target.notas.value,
    };

    const response = await fetch('http://localhost:3000/reservations', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });

    const result = await response.json();
    alert(result.message);
});