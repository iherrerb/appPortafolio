

document.getElementById('reservation-form').addEventListener('submit', async (e) => {
    e.preventDefault();
   
    
    const data = {
        email: e.target.email.value,
        service: e.target.service.value,
        professional: e.target.professional.value,
        date: e.target.date.value,
        time: e.target.time.value,
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